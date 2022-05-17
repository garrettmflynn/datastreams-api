import * as source from '../common/source.device'
import { Device } from '../devices/Device'
import { randomUUID } from '../common/id'

export default class SourceService {

    users: Map<string,any> = new Map()
    device?: Device<any>

    constructor() {}

    addUser = (ws: any) => {
        if (!ws.id) ws.id = randomUUID()
        if (this.users.size === 0) {
            this.device = new Device({
                label: 'Remote Source',
                kind: 'datainput',
                onconnect: source.onconnect,
                ondisconnect: source.ondisconnect,
                ondata: this.ondata as any
            })

            this.device.connect()
        }
        this.users.set(ws.id, {uuid: ws.id, ws})
    }

    removeUser = (ws: any) => {
        this.users.delete(ws.id)
        if (this.users.size === 0) this.device?.disconnect()
    }

    ondata = (data:any) => {
        this.users.forEach(u => {
            u.ws.send(JSON.stringify({data, service: 'websocket'}))
        })
    }
}