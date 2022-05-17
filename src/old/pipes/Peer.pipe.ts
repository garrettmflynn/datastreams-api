import { Pipe } from "./Pipe";
import {DataChannel} from "../../DataChannel";
import {RoomInterface} from "../../common/types/Room.types";


/*

Known Bugs
- Adding a DataChannel after an RTCPeerConnection has already been opened will not work reliably (see addDataTracks)

*/

import { PipeSettingsType , DataChannelInfoType, DataChannelCallbackType} from '../../types/Pipes.types'
import { DataStreamTrack, DataStream } from '../../core/index';
import { MessageType } from '../../types/Core.types';
import { PeerInfoType } from 'src/common/types/Peer.types';

export class PeerPipe extends Pipe {

    config: RTCConfiguration
    peers: Map<string,RTCPeerConnection> = new Map()
    dataChannelQueueLength: number = 0
    dataChannels: Map<string,any> = new Map()
    rooms: Map<string,RoomInterface> = new Map()
    sources: Map<string,any> = new Map()
    toResolve: {[x:string]: any} = {} // for tracking DataChannel callbacks
    hasResolved: {[x:string]: DataChannel} = {} // for tracking DataChannel callbacks

    get [Symbol.toStringTag]() { return 'PeerPipe' }

    constructor(settings:PipeSettingsType){
        super('stream', settings)

        this.add(settings.source)

        this.config = {
            iceServers: [
              {
                urls: ["stun:stun.l.google.com:19302"]
              }
            ]
          };

        // ---------------------------- Event Listeners ----------------------------

        this.addEventListener('peerdisconnect', ((ev:CustomEvent) => { this.peers.delete(ev.detail.id)}) as EventListener )
        this.addEventListener('peerdisconnect', ((ev:CustomEvent) => { this.onpeerdisconnect(ev)}) as EventListener )
        this.addEventListener('peerconnect', ((ev:CustomEvent) => { this.peers.set(ev.detail.id, ev.detail.peer) }) as EventListener )
        this.addEventListener('peerconnect', ((ev:CustomEvent) => { this.onpeerconnect(ev)}) as EventListener )
        this.addEventListener('datachannel', ((ev:CustomEvent) => { this.ondatachannel(ev) }) as EventListener )
        this.addEventListener('room', ((ev:CustomEvent) => { this.onroom(ev)}) as EventListener )
        this.addEventListener('track', ((ev:CustomEvent) => { this.ontrack(ev) }) as EventListener )
        // this.addEventListener('trackremoved', ((ev:CustomEvent) => { this.ontrackremoved(ev)}) as EventListener )
        this.addEventListener('roomclosed', ((ev:CustomEvent) => { this.onroomclosed(ev)}) as EventListener )
        
        // ---------------------------- Socket Messages ----------------------------
        if (this.socket){
            let prevSocketCallback = this.socket.onmessage
            this.socket.onmessage = async (res) => {

                prevSocketCallback(res)

                // ----------------- Generic Message Handlers -----------------
                if (res.cmd === 'rooms') { 
                    res.data.forEach((room:RoomInterface) => {this.rooms.set(room.uuid, room)})
                    this.dispatchEvent(new CustomEvent('room', {detail: {rooms: res.data}}))
                } else if (res.cmd === 'roomadded'){
                    this.rooms.set(res.data.uuid, res.data)
                    this.dispatchEvent(new CustomEvent('room', {detail: {room: res.data, rooms: Array.from(this.rooms, ([_,value]) => value)}}))
                }

                else if (res.cmd === 'roomclosed') this.dispatchEvent(new CustomEvent('roomclosed'))
                
                
                // automatically passed to subscriptions

                // ----------------- Local Initiation Handlers -----------------
                else if (res.cmd === 'connect') {
                    this.createPeerConnection(res.data) // connect to peer
                    for (let arr of this.sources) {
                        let dataTracks = arr[1].getDataTracks()
                        await this.addDataTracks(res.data?.id, dataTracks) // add data tracks from all sources
                    }
                }
                else if (res.cmd === 'answer') {
                    let peer = this.peers.get(res.data.id)
                    if (peer) peer.setRemoteDescription(res.data.msg);
                } else if (res.cmd === 'candidate'){
                    let peer = this.peers.get(res.data.id)
                    let candidate = new RTCIceCandidate(res.data.msg)
                    if (peer)  peer.addIceCandidate(candidate).catch((e:Error) => console.error(e)); // thrown multiple times since initial candidates aren't usually appropriate
                } else if (res.cmd === 'disconnectPeer') {
                    this.closeConnection(res.data, this.peers.get(res.data.id))
                }

                // ----------------- Remote Initiation Handlers -----------------
                else if (res.cmd === 'offer') this.onoffer(res.data, res.data.msg, res.id)
            }
        }
    }

    onpeerdisconnect = (_:CustomEvent) => {}
    onpeerconnect = (_:CustomEvent) => {}
    ondatachannel = (_:CustomEvent) => {}
    onroom = (_:CustomEvent) => {}
    ontrack = (_:CustomEvent) => {}
    // ontrackremoved = (ev:CustomEvent) => {}
    onroomclosed = (_:CustomEvent) => {}

    // Add DataStreamTracks from DataStream (in series)
    addDataTracks = async (id:string, tracks:DataStreamTrack[]) => {
        for (let track of tracks) {
            await this.openDataChannel({name: `DataStreamTrack${this.dataChannelQueueLength}`, peer:id, reciprocated: false}).then((o: DataChannel) => track.subscribe(o.sendMessage)) // stream over data channel
        }
    }


    // Note: Will run on initial offer and subsequent renegotiations
    onoffer = async (peerInfo:PeerInfoType, sdp:RTCSessionDescriptionInit, peerId:string) => {
        let myPeerConnection = await this.createPeerConnection(peerInfo, peerId)
        const description = new RTCSessionDescription(sdp);
        myPeerConnection.setRemoteDescription(description).then(() => myPeerConnection.createAnswer()).then(sdp => myPeerConnection.setLocalDescription(sdp))
        .then(() => {
            this.send({cmd: 'answer', data: {id:peerInfo.id, msg: myPeerConnection.localDescription}})
        });
    }

    handleNegotiationNeededEvent = (localConnection:RTCPeerConnection, id:string) => {
        localConnection.createOffer()
        .then(sdp => localConnection.setLocalDescription(sdp))
        .then(() => {
            this.send({cmd: 'offer', data: {id, msg: localConnection.localDescription}})
        });
    }

    handleICECandidateEvent = (event: RTCPeerConnectionIceEvent, id: string) => {
        if (event.candidate) this.send({cmd: 'candidate', data: {id, msg: event.candidate}})
    }

    handleTrackEvent = (event:RTCTrackEvent, id:string) => {
        if (event.track){
            let track = event.track
            this.dispatchEvent(new CustomEvent('track', {detail: {track, id}}))
            return true
        } else return null
    }


    // NOTE: This data channel will always be the one that can send/receive information
    handleDataChannelEvent = async (ev:RTCDataChannelEvent, _:string) => {

        // Filter for Expected Channels (or allow all)
        // if (!this.channels || this.channels.includes(ev.channel.label)){

            // Receive Data from Remote
            let o = await this.openDataChannel({channel: ev.channel, callback: (msg, channel) => channel.addData(msg)}) as DataChannel
            const toResolve = this.toResolve[o.label]

            if (toResolve) {
                delete this.toResolve[o.label]
                toResolve(o)
            }

            this.hasResolved[o.label] = o // keep track of channels already resolved
            this.dispatchEvent(new CustomEvent('datachannel', {detail: o}))
        // }

    }

    // handleRemoveTrackEvent = (ev,id) => {
    //     if (ev.track){
    //         let track = ev.track
    //         this.dispatchEvent(new CustomEvent('trackremoved', {detail: {track, id}}))
    //         return true
    //     }
    // }


    handleICEConnectionStateChangeEvent = (_:Event, info:PeerInfoType) => {
        const peer = this.peers.get(info.id) 
        switch(peer?.iceConnectionState) {
            case "closed":
            case "failed":
            this.closeConnection(info, peer);
              break;
          }
    }

    handleICEGatheringStateChangeEvent = (_:Event) => {}

    handleSignalingStateChangeEvent = (_:Event, info:PeerInfoType) => {
        const peer = this.peers.get(info.id) 
        switch(peer?.signalingState) {
            case "closed":
            this.closeConnection(info, peer);
            break;
        }
    }

    closeConnection = (info:PeerInfoType, peer?:RTCPeerConnection) => {
        if (peer) this.dispatchEvent(new CustomEvent('peerdisconnect', {detail: Object.assign(info, {peer})}))
    }

    createPeerConnection = async (peerInfo:PeerInfoType, peerId?:string) => {

        const localConnection = new RTCPeerConnection(this.config);  

        // Add Local MediaStreamTracks to Peer Connection (on first offer)
        this.sources.forEach(s => {
            s.getTracks().forEach( async (track: MediaStreamTrack | DataStreamTrack) => {
                if (track instanceof MediaStreamTrack) localConnection.addTrack(track, s) // ensure connection has track
            });
        })

        localConnection.onicecandidate = (e) => this.handleICECandidateEvent(e,peerInfo.id) // send candidates to remote
        localConnection.onnegotiationneeded = () => this.handleNegotiationNeededEvent(localConnection,peerInfo.id) // offer to remote
        localConnection.ondatachannel = (e) => this.handleDataChannelEvent(e,peerInfo.id)

        peerInfo.peer = localConnection

        if (!peerId) this.dispatchEvent(new CustomEvent('peerconnect', {detail: peerInfo}))
        else {
            // Only respond to tracks from remote peers
            localConnection.ontrack = (e) => {
                this.handleTrackEvent(e, peerId); 
            }
            // localConnection.onremovetrack = (e) => this.handleRemoveTrackEvent(e, peerId);
            localConnection.oniceconnectionstatechange = (e) => this.handleICEConnectionStateChangeEvent(e,peerInfo);
            localConnection.onicegatheringstatechange = (e) => this.handleICEGatheringStateChangeEvent(e);
            localConnection.onsignalingstatechange = (e) => this. handleSignalingStateChangeEvent(e,peerInfo);
            
        }

        return localConnection
    }

    add = async (source?:DataStream) => {
        if (source){
            this.sources.set(source.id, source)
            source.addEventListener('track', ((ev:CustomEvent) => {
                let kind = ev.detail.kind
                if (!kind || (kind !== 'video' && kind !== 'audio')){
                    for (let arr of this.peers) {
                        this.addDataTracks(arr[0], [ev.detail])
                    }
                }
            }) as EventListener)
        }
    }

    remove = (id:string) => {
        let source = this.sources.get(id)
        this.sources.delete(id)
        source.removeEventListener('track', source)
    }

    getRooms = async (auth:string) => {
        let res = await this.send({cmd: 'rooms', data:auth}) as MessageType
        return res.data
    }
    
    joinRoom = async (room:RoomInterface, info:{[x:string]: any}, auth:string) => {
        return await this.send({cmd: "connect", data:{auth, info, room}});
    }

    createRoom = async (room: RoomInterface) => this.send({cmd: 'createroom', room})

    leaveRoom = async (room: RoomInterface) => {
        this.peers.forEach((_,key) => this.peers.delete(key))
        return this.send({cmd: 'disconnect', room}) 
    }

    send = async (data:object) => {
        if (this.socket) return await this.socket.send(data, 'webrtc')
    }

    openDataChannel = async ({peer, channel, name, callback, reciprocated}:DataChannelInfoType) => {

        let local = false
        this.dataChannelQueueLength++ // increment name

        if (!(channel instanceof RTCDataChannel) && peer) {
            local = true
            let peerConnection = this.peers.get(peer)
            console.error('Opening data channel')
            if (peerConnection) channel = peerConnection.createDataChannel(name ?? 'my-data-channel');
        }

        return await this.useDataChannel(channel as RTCDataChannel, callback, local, reciprocated)
    }

    closeDataChannel = async (id:string) => {
        let dC = this.dataChannels.get(id)
        if (dC) dC.close()
        this.dataChannels.delete(id)
    }

    useDataChannel = (dataChannel:RTCDataChannel, onMessage:DataChannelCallbackType=()=>{}, local:boolean=false, reciprocated:boolean=true):Promise<DataChannel> => {

        return new Promise((resolve) => {

            // Assign Event Listeners on Open
            dataChannel.addEventListener("open", () => {

                // Track DataChannel Instances
                const dC = new DataChannel(dataChannel)
                if (local) this.dataChannels.set(dC.id, dC) // only save local

                let toResolve = (channel:DataChannel) => {
                    
                    // Set OnMessage Callback
                    channel.parent.addEventListener("message", (event) => {
                        if (onMessage) onMessage(JSON.parse(event.data), channel); // parse messages from peer
                    })
                    
                    // Resolve to User
                    channel.sendMessage = (message) => {this.sendMessage(message, channel.id, reciprocated)} // TODO: Make this internal to the DataChannel?
                    
                    resolve(channel)
                }

                // If you know this won't be reciprocated, then resolve immediately
                if (!local || !reciprocated) toResolve(dC)
                
                // Otherwise mark to resolve OR resolve if this channel already has been
                else {
                    let existingResolve = this.hasResolved[dC.label]
                    if (existingResolve) {
                        toResolve(existingResolve)
                        delete this.hasResolved[dC.label]
                    } else this.toResolve[dC.label] = toResolve
                }
            });

            dataChannel.addEventListener("close", () =>{console.error('Data channel closed', dataChannel)});
        });
    };


    sendMessage = (message:object, id:string, reciprocated:boolean) => {
        let data = JSON.stringify(message)

        // Ensure Message Sends to Both Channel Instances
        let check = () => {
            let dC =  this.dataChannels.get(id)
            if (dC) {
                if (dC.parent.readyState === 'open') dC.send(data); // send on open instead
                else dC.parent.addEventListener('open', () => {dC.send(data);}) // send on open instead
            } else if (reciprocated) setTimeout(check, 500)
        }
        check()
    }
}