import * as source from '../../common/source.device'
import { Device } from 'src/frontend/devices/Device'

export class SourceService {

    users: Map<string,any> = new Map()
    device?: Device<any>

    constructor() {}

    addUser = (ws: any) => {
        if (this.users.size === 0) {
            this.device = new Device(source)
            this.device.ondata(this.onmessage)
        }
        this.users.set(ws.id, {uuid: ws.id, ws})
    }

    removeUser = (ws: any) => {
        this.users.delete(ws.id)
        if (this.users.size === 0) this.device?.disconnect()
    }

    onmessage = (data:any) => {
        this.users.forEach(u => {
            u.ws.send(JSON.stringify({data, service: 'websocket'}))
        })
    }
}