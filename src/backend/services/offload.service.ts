import * as parseutils from '../../common/parse.utils'
import { DataType } from '../../common/types/Data.types';
import { randomUUID } from '../../common/id'

export class OffloadService {

    users: Map<string,any> = new Map()


    constructor() {
        
    }

    addUser = (ws: any) => {
        if (!ws.id) ws.id = randomUUID()
        this.users.set(ws.id, {uuid: ws.id, ws})
    }

     removeUser = (ws: any) => {
        this.users.delete(ws.id)
    }

    onmessage = (str: string, ws: any) => {

        let data;
        const o = parseutils.safeParse(str) as DataType

        let id = ws.id
        let input = o.data

        // ServerPipe Utilities
        if (input.cmd === 'settings') data = this.initialize(input,id) 
        else if (input.cmd === 'data') data = this.ondata(input,id)

        if (data) ws.send(JSON.stringify({data, callbackId: o.callbackId, id, service: 'offload'}))
        return data
    }

    initialize = (o: DataType, id: string) => {

        // Set Settings Persistently
        let u = this.users.get(id)
        u.settings = o.data

        // Return Data
        return {cmd: 'ready'}
    }

    ondata = (o: DataType, id: string) => {

        // Process
        let u = this.users.get(id)
        let data = u.settings.function(o.data)

        return {cmd: 'data', data: data}

    }
}