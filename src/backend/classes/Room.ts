
import { UserType } from '../types/User.types'

export default class Room {

    // Core Properties
    uuid: number = Math.floor(Math.random() * 10000000)
    name: string = ''
    initiator: UserType
    restrictions: any = {}
    peers: Map<number,any> = new Map()
    empty:boolean = false

    constructor(initiator: UserType, settings:any = {name: null, restrictions: {}}){

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
            peers: Array.from(this.peers, ([,peer]) => peer.uuid)
        }
    }

    addPeer = (o: UserType) => {

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

    removePeer = (origin: number) => {
        let peer = this.peers.get(origin)
        this.peers.delete(origin)
        this.peers.forEach(p => p.ws.send(JSON.stringify({cmd: "disconnectPeer", data: {id: peer.uuid, info: peer.info}, id: origin, service: 'webrtc'}))) // remove from peers
        if (this.peers.size === 0) this.empty = true
    }
}
