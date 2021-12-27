import * as parseutils from "../../common/parse.utils";
import randomUUID from '../utils/id.js'
import { MessageType } from '../types/Core.types'

export default class Websocket {

    url: string;
    sendBuffer: any[] = [];
    callbacks: Map<string,(data:object) => any> = new Map();
    ready: boolean = false;
    ws?: WebSocket;

    constructor(url='http://localhost', auth:string=''){

        this.url = url
        let urlObj = new URL(url)
        if (urlObj.protocol === 'http:') this.ws = new WebSocket(`ws://` + urlObj.host, [auth])
        else if (urlObj.protocol === 'https:') this.ws = new WebSocket(`wss://` + urlObj.host, [auth]);
        else {console.log('invalid protocol'); return;}

        this.sendBuffer = []
        this.callbacks = new Map()

        this.ws.onopen = this._onopen
        this.ws.onerror = this._onerror
        this.ws.onmessage = this._onmessage
        this.ws.onclose = this._onclose

        window.onunload = window.onbeforeunload = () => {
            if (this.ws) this.ws.onclose = () => {}
            this.close()
        }

    }

    _onopen = () => {
        this.ready = true
        this.sendBuffer.forEach(msg => {
            if (this.ws) this.ws.send(msg)
        })

        this.onopen()
    }
    
    _onclose = () => {
        this.ready = false
        this.onclose()
    }

    _onerror = (e:Event) => { 
        console.error(e)
        this.onerror(e)
        return e
    }
    
    _onmessage = (res:MessageType) => { 


        try {
            let parsed = parseutils.safeParse(res.data)

            if (parsed.error) console.error(parsed.error)
            else {
                let callbackId = parsed.callbackId
                let data = parsed

                // Run Callback
                if (callbackId){
                    data = data.data
                    let callback = this.callbacks.get(callbackId)
                    if (callback) callback(data)
                }
                
                // Parse Stripped Data Message
                if (data) this.onmessage(data)
            }

        } catch (e) {
            console.error('Error parsing WebSocket message from server: ', res.data , e)
        }
    }

    onopen: (arg?:any) => any = () => {}
    onclose: (arg?:any) => any = () => {}
    onerror: (arg?:any) => any = () => {}
    onmessage: (arg?:any) => any = () => {}

    addEventListener = (name:string, callback:(val:object)=>any) => {
        if (this.ws){
            if (name === 'message') this.ws.addEventListener(name, (res) => {callback(JSON.parse(res.data))}) // parse messages
            else this.ws.addEventListener(name, callback) // otherwise pass raw response
        }
    }

    close = () => {
        if (this.ws) this.ws.close();
    }

    send = (data:object, service:string='websocket') => {

        return new Promise(resolve => {

            // Allow Awaiting WebSocket Calls
            let callbackId = randomUUID()
            let callback = (data:object) => {
                resolve(data)
                this.callbacks.delete(callbackId)
            }

            this.callbacks.set(callbackId, callback)

            // Create Message with Proper Stringification
            let o = {data, callbackId, service}
            let msg = parseutils.safeStringify(o)

            if (this.ready && this.ws){

                // Actually Send
                this.ws.send(msg)

            } else this.sendBuffer.push(msg)

        })


    }

}