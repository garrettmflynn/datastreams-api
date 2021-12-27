type peerType = {
    uuid: number
    ws: any
    auth: any
    info: any
}


module.exports = class WebRTCService {

    users: Map<string,any> = new Map()
    rooms: Map<number,any> = new Map()


    constructor() {

    }

    addUser = (ws, auth) => {
        if (!ws.id) ws.id = Math.floor(Math.random() * 10000000);
        this.users.set(ws.id, {uuid: ws.id, auth, ws, info: {}}) // Optionally includes a user-specified ID to be used as a filter
        let msg = this.getRoomsByAuth(auth)
        let data = JSON.stringify({cmd:'rooms', data: msg})
        ws.send(data)
    }

    getRoomsByAuth = (auth) => this.getRooms((r) => r.restrictions?.users == null || r.restrictions.users.includes(auth))

    getRooms = (filter) => {
        return Array.from(this.rooms, ([name, value]) => value.export()).filter(filter)
    }

    removeUser = (ws) => {
        this.rooms.forEach(r => r.peers.has(ws.id) && r.removePeer(ws.id))
        this.users.delete(ws.id)
    }

    onmessage = (o, ws) => {

        let data
        o = JSON.parse(o)
        let id = ws.id

        let input = o.data
        // Create Room
        if (input.cmd === 'rooms') {
            let res = this.getRoomsByAuth(input.data)
            data = {cmd:'rooms', data: res}
        }
        if (input.cmd === 'createroom') data = this.createroom(input.data, id)

        // Room Management
        else if (input.cmd === 'connect') data = this.connect(input, id)
        else if (input.cmd === 'disconnect') data = this.disconnect(input, id)
        
        // Connection Instantiation
        else if (input.cmd === 'offer') data = this.pass('offer', id, input.data.id, input.data.msg)
        else if (input.cmd === 'answer') data = this.pass('answer', id, input.data.id, input.data.msg)
        else if (input.cmd === 'candidate') data = this.pass('candidate', id, input.data.id, input.data.msg)

        // Send Callback Id
        ws.send(JSON.stringify({data, callbackId: o.callbackId, id, service:'webrtc'}))
        
        return data
    }

    connect = (o,origin) => {

        // Get Room
        let room = this.rooms.get(o.data.room.uuid)

        // Reset Auth and Info on Peer
        let u = this.users.get(origin)
        if (o.data.info) u.info = Object.assign(u.info, o.data.info)
        if (o.data.auth) u.auth = o.data.auth

        // Try to Add Peer to the Room
        if (room) room.addPeer(u)

        return room.export()
    }

    createroom = (settings={},origin='server') => {

        // Get Room Initiator
        let initiator = this.users.get(origin)

        // Setup a Room
        let room = new Room(initiator, settings)

        this.rooms.set(room.uuid, room)

        let data = room.export()

        // Tell Everyone about the New Room
        if (!data.restrictions?.users) this.users.forEach((u) => {u.ws.send(JSON.stringify({cmd: 'roomadded', data}))})
        
        // Otherwise Abide by Restrictions
        else {
            this.users.forEach((u) => {

                // Send to Creator and Authorized
                if (u.ws.id === origin || data.restrictions.users.includes(u.id)) u.ws.send(JSON.stringify({cmd: 'roomadded', data}))
            })
        }

        return data
    }

    disconnect = (o,origin) => {

        if (o.data) this.removePeerFromRoom(this.rooms.get(o.data.uuid), origin) // Remove from specified room
        else this.rooms.forEach(r => r.peers.has(origin) && this.removePeerFromRoom(r,origin)) // Remove from all rooms

        return {cmd: 'roomclosed'}
    }

    removePeerFromRoom = (room, origin) => {
        room.removePeer(origin) // remove peer from room

        if (room.empty === true){
            setTimeout(() => {

                // Remove if still empty
                if (room.empty) this.rooms.delete(room.id)

            }, 5 * 60 * 1000) // check again after 5 minutes
        }
    }

    // Macro for Passing Offers, Answers, and Candidates between Peers
    pass = (cmd, origin, destination, msg) => {
        let recipient = this.users.get(destination)
        if (recipient?.ws) recipient.ws.send(JSON.stringify({cmd, data: {id: origin, msg}, id: origin, service: 'webrtc'}))
    }
}


class Room {

    // Core Properties
    uuid: number = Math.floor(Math.random() * 10000000)
    name: string = ''
    initiator: peerType
    restrictions: any = {}
    peers: Map<string,any> = new Map()
    empty:boolean = false

    constructor(initiator, settings:any = {name: null, restrictions: {}}){

        // Core Properties
        this.uuid = Math.floor(Math.random() * 10000000)
        this.name = settings.name ?? this.uuid
        this.initiator = initiator
        this.restrictions = settings.restrictions

    }

    export = () => {
        return {
            uuid: this.uuid,
            name: this.name,
            initiator: this.initiator.uuid,
            restrictions: this.restrictions,
            peers: Array.from(this.peers, ([key,peer]) => peer.uuid)
        }
    }

    addPeer = (o) => {

        // Check User Existence
        if (this.peers.has(o.uuid)) console.error('User already added to room.')

        // Check User Authorization (if required) | Currently just a specified id
        else if (this.restrictions?.users && !this.restrictions.users.includes(o.auth)) console.error('User not authorized to join room.')
        
        // Otherwise Let Join
        else {
            
            if (!this.restrictions?.max || this.restrictions.max > this.peers.size) {

            // Request Peer Connections
            this.peers.forEach((peer) => {
                o.ws.send(JSON.stringify({cmd: "connect", data: {id:peer.uuid, info: peer.info}, service: 'webrtc'})) // initialize connections
                peer.ws.send(JSON.stringify({cmd: "connect", data: {id:o.uuid, info: peer.info}, service: 'webrtc'})) // extend connections
            })

            // Set in Room
            this.peers.set(o.uuid, o)

        } else console.error('Room is full')
    }
        
    }

    removePeer = (origin) => {
        let peer = this.peers.get(origin)
        this.peers.delete(origin)
        this.peers.forEach(p => p.ws.send(JSON.stringify({cmd: "disconnectPeer", data: {id: peer.uuid, info: peer.info}, id: origin, service: 'webrtc'}))) // remove from peers
        if (this.peers.size === 0) this.empty = true
    }
}