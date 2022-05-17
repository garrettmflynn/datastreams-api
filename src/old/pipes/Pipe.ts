import { Websocket } from "../../utils/WebSocket";
import { randomUUID } from '../../common/id'
import { PipeTypes, PipeSettingsType, PipeCallbackType } from '../../types/Pipes.types'

export class Pipe extends EventTarget{

    get [Symbol.toStringTag]() { return 'Pipe' }

    id: string = randomUUID()
    type: PipeTypes
    settings: PipeSettingsType
    socket?: Websocket
    callback: PipeCallbackType = () => {}

    constructor(type: PipeTypes = 'stream', settings:PipeSettingsType = {}) {
        super()
        
        this.id = randomUUID()
        this.type = type
        this.settings = settings

        // Create Socket
        let needsSocket = ['server', 'stream']
        if (needsSocket.includes(type)){
            this.socket = settings.socket ?? new Websocket(settings.server, {auth: settings.auth}) // server and stream needs WebSocket
            if (type === 'stream') this.socket.addEventListener('message', this.ondata) // only stream needs an ambient ondata listener
        }

        if (settings.callback instanceof Function) this.callback = settings.callback

    }

    process = async (data:any) => {return data}

    // Largely Replaced by Child-Specific Event Listeners
    subscribe = (callback:PipeCallbackType) => {
        this.callback = callback
    }

    unsubscribe = () => {
        this.callback = () => {}
    }

    ondata = (data:any) => {
        if (!('service' in data))  this.callback(data) // ignore service callbacks
    }

    
}