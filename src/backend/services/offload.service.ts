let parseutils = require('../utils/parse.node.js')


module.exports = class OffloadService {

    users: Map<string,any> = new Map()


    constructor() {
        
    }

    addUser = (ws) => {
        if (!ws.id) ws.id = Math.floor(Math.random() * 10000000);
        this.users.set(ws.id, {id: ws.id, ws})
    }

     removeUser = (ws) => {
        this.users.delete(ws.id)
    }

    onmessage = (o, ws) => {

        let data;
        o = parseutils.safeParse(o)

        let id = ws.id
        let input = o.data

        // Offloader Utilities
        if (input.cmd === 'settings') data = this.initialize(input,id) 
        else if (input.cmd === 'data') data = this.ondata(input,id)

        if (data) ws.send(JSON.stringify({data, callbackId: o.callbackId, id, service: 'offload'}))
        return data
    }

    initialize = (o,id) => {
        // Set Settings Persistently
        let u = this.users.get(id)
        u.settings = o.data

        // Return Data
        return {cmd: 'ready'}
    }

    ondata = (o, id) => {

        // Process
        let u = this.users.get(id)
        let data = u.settings.function(o.data)

        return {cmd: 'data', data: data}

    }
}