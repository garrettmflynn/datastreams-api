import {Room} from '../classes/Room'
import {UserType} from '../types/User.types'
import { DataType } from '../../common/types/Data.types'
import * as parseutils from '../../common/parse.utils.js'
import { RoomInterface } from '../../common/types/Room.types'
import {randomUUID } from '../../common/id'

export class PeerService {

    users: Map<string,UserType> = new Map()
    rooms: Map<string,any> = new Map()


    constructor() {

    }

    addUser = (ws:any, auth:string) => {
        if (!ws.id) ws.id = randomUUID()
        this.users.set(ws.id, {uuid: ws.id, auth, ws, info: {}}) // Optionally includes a user-specified ID to be used as a filter
        let msg = this.getRoomsByAuth(auth)
        let data = JSON.stringify({cmd:'rooms', data: msg})
        ws.send(data)
    }

    getRoomsByAuth = (auth:string) => this.getRooms((r) => r.restrictions?.users == null || r.restrictions.users.includes(auth))

    getRooms = (filter:(arg:Room) => boolean) => {
        return Array.from(this.rooms, ([, value]) => value.export()).filter(filter)
    }

    removeUser = (ws: any) => {
        this.rooms.forEach(r => r.peers.has(ws.id) && r.removePeer(ws.id))
        this.users.delete(ws.id)
    }

    onmessage = async (o: DataType, ws:any) => {

        let data
        o = parseutils.safeParse(o)
        let id = ws.id

        let input = o.data
        // Create Room
        if (input.cmd === 'rooms') {
            let res = this.getRoomsByAuth(input.data)
            data = {cmd:'rooms', data: res}
        }
        if (input.cmd === 'createroom') data = await this.createRoom(input.data, id)

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

    connect = (o: DataType, origin: string) => {

        // Get Room
        let room = this.rooms.get(o.data.room.uuid)

        // Reset Auth and Info on Peer
        let u = this.users.get(origin)
        if (u){
            if (o.data.info) u.info = Object.assign(u.info, o.data.info)
            if (o.data.auth) u.auth = o.data.auth

            // Try to Add Peer to the Room
            if (room) room.addPeer(u)
        }

        return room.export()
    }

    createRoom = async (settings:RoomInterface,origin='server') => {

        // Get Room Initiator
        let initiator = this.users.get(origin)

        // Setup a Room
        if (initiator){

            let room = new Room(initiator, settings)

            this.rooms.set(room.uuid, room)

            let data = room.export()

            // Tell Everyone about the New Room
            if (!data.restrictions?.users) this.users.forEach((u) => {u.ws.send(JSON.stringify({cmd: 'roomadded', data}))})
            
            // Otherwise Abide by Restrictions
            else {
                this.users.forEach((u) => {

                    // Send to Creator and Authorized
                    if (u.ws.id === origin || data.restrictions.users.includes(u.uuid)) u.ws.send(JSON.stringify({cmd: 'roomadded', data}))
                })
            }

            return data
        } else return Promise.reject()
    }

    disconnect = (o: DataType, origin: string) => {

        if (o.data) this.removePeerFromRoom(this.rooms.get(o.data.uuid), origin) // Remove from specified room
        else this.rooms.forEach(r => r.peers.has(origin) && this.removePeerFromRoom(r,origin)) // Remove from all rooms

        return {cmd: 'roomclosed'}
    }

    removePeerFromRoom = (room: Room, origin: string) => {
        room.removePeer(origin) // remove peer from room

        if (room.empty === true){
            setTimeout(() => {

                // Remove if still empty
                if (room.empty) this.rooms.delete(room.uuid)

            }, 5 * 60 * 1000) // check again after 5 minutes
        }
    }

    // Macro for Passing Offers, Answers, and Candidates between Peers
    pass = (cmd:string, origin: string, destination:string, msg:any) => {
        let recipient = this.users.get(destination)
        if (recipient?.ws) recipient.ws.send(JSON.stringify({cmd, data: {id: origin, msg}, id: origin, service: 'webrtc'}))
    }
}


module.exports = PeerService