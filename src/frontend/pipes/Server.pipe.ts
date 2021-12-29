import { Pipe } from "./Pipe.js";
import { PipeSettingsType } from '../types/Pipes.types'
import { Websocket } from '../utils/WebSocket.js';
import { DataType } from 'src/common/types/Data.types.js';

export class ServerPipe extends Pipe {

    get [Symbol.toStringTag]() { return 'ServerPipe' }

    queue: any[] = []
    socket?: Websocket
    readyForData: boolean = false

    constructor(settings:PipeSettingsType) {
        
        // Socket Created on Route
        super('server', settings)


        // Adding Custom Callbacks
        if (this.socket){
            this.socket.onopen = () => {

                // Strip Source (self)
                let data = {}
                for (let key in settings) {
                    if (key != 'source') (data as any)[key] = (settings as any)[key] // TODO: Make robust to typing error
                }

                this.send({cmd: 'settings', data});
            }

            this.socket.onmessage = (o) => {
                if (o.cmd === 'ready') {
                    this.readyForData = true
                    this.queue.forEach(f => f())
                }
                // else if (o.cmd === 'data') this.ondata(o)
            }

            this.socket.onclose = () => {
                this.readyForData = false
            }
        }
    }


    send = (o:DataType):Promise<DataType> => {
        return new Promise(resolve => {
            let sendFunction = async () => {
                if (this.socket) resolve(await this.socket.send(o, 'offload') as DataType);
            }
            if (this.readyForData || o.cmd === 'settings') sendFunction()
            else this.queue.push(sendFunction)
        })

    }

    sendData = async (data:any[]) => {
        return await this.send({cmd: 'data', data});
    }

    // Process by sending to server
    process = async (args:any[]) => {
        if (!Array.isArray(args)) args = [args]
        let res = await this.sendData(args)
        this.ondata(res) // pass to subscriptions
        return res.data
    }


    // Hook for Insertable Streams Transform
    transform = async (chunk: any, controller:TransformStreamDefaultController) => {
        let res = await this.sendData(chunk) // applies function on server
        if (res) controller.enqueue(res.data)
    }
}