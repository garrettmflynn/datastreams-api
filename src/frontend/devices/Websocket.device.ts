import { Device } from "./Device.js"
import { DeviceConstraintsType } from '../types/Devices.types.js';
import { Websocket } from '../pipes/WebSocket.js';

export class WebsocketDevice<T=any> extends Device<T> { //This is formatted for the way the HEG sends/receives information. Other BLE devices will likely need changes to this to be interactive.
                    
    socket?: Websocket

    constructor(constraints: DeviceConstraintsType) {
        
        super(constraints)
    }

    connect = async (): Promise<void> => { //Must be run by button press or user-initiated call
        if (!this.socket || this.socket.url != this.constraints.url) {
            this.socket = new Websocket(this.constraints.url)
            this.socket.onmessage = (msg:object) => this.ondata(msg)
        }
    }

    disconnect = async () => this.socket?.close()

    send = async (msg:object) => this.socket?.send(msg)
}