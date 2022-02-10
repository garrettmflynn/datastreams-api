import * as core from "../../src/frontend/core";
import * as devices from "../../src/frontend/devices";
import * as pipes from "../../src/frontend/pipes";
import * as transforms from "../../src/frontend/transforms";

const datastreams = {
    core,
    devices,
    pipes,
    transforms
}

// import Streamer from './src/pipes/Streamer.js'
let connected = document.getElementById('connected')
let peer = document.getElementById('peer')
let me = document.getElementById('me')

let auth = 'THISISME' // lock yourself to a roo with you in it

// ---------------------------------- Stream Context Initialization ----------------------------------
const server = (location.hostname === "localhost" || location.hostname === "127.0.0.1" && globalThis.brainsatplayPlatform) ? 'http://localhost' : 'https://server.brainsatplay.com'
let context = new datastreams.StreamContext({ server , auth }) // sets dataDevices on globalThis.navigator

// ---------------------------------- Event Monitoring ----------------------------------
let joined = false

context.streamer.channels = ['chat']


context.streamer.onroom = (ev) => {

    let rooms = ev.detail.rooms
    
    let found = rooms.find(r => (r.restrictions?.users?.length === 1 && r.restrictions?.users[0] === auth)) // find private room for myself
    if (!found) context.streamer.createRoom({
        restrictions: {users: [auth]}
    })

    // Choose a room (here we default to the first)
    else if (!joined && found){
        joined = true
        context.streamer.joinRoom(found, {id: 'Other User'}, auth)
    }
}

let channels = new Map() // Use map so that refreshes aren't duplicated
context.streamer.onpeerconnect = async (ev) => {
    context.streamer.openDataChannel({peer: ev.detail.id, name:'chat'}).then(o => {
        connected.innerHTML = `${ev.detail.info.id}`
        channels.set(o.id, o)
    })

}

context.streamer.ondatachannel = async (ev) => {
    if (ev.detail.label === 'chat') ev.detail.subscribe((msg) => peer.innerHTML += msg)
}

globalThis.onkeydown = (ev) => {
    let msg = ev.key
    me.innerHTML += msg
    channels.forEach(o => o.sendMessage(msg)) // type to the peer!
}
