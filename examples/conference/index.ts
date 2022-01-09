
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

import "./index.css"

let dataDevices = new datastreams.core.DataDevices()

let deviceTypesContainer = document.body.querySelector('#devicetypes')
let buttonContainer = document.body.querySelector('#buttons')
let rtcHangout = document.body.querySelector('#rtchangout')
let roomname = document.body.querySelector('#roomname')
let create = document.body.querySelector('#createroom')
let roomprompt = document.body.querySelector('#room-prompt')

let videos = new Map()
let buttons = new Map()

// Initialize Socket Connection
const server = (location.hostname === "localhost" || location.hostname === "127.0.0.1" && window.brainsatplayPlatform) ? 'http://localhost' : 'https://server.brainsatplay.com'

// Extended with Defaults
const onmessage = (res) => {
    let data = res.data
    if (res.cmd === 'rooms') {
        if (!buttons.has(data.uuid)) {
            // let arr = utilities.addRooms(data, streamContext, videos)
            // arr.forEach(button => {
            //     buttons.set(data.uuid, button)
            //     document.body.querySelector('#rooms').insertAdjacentElement('beforeend', button)
            // })
        }
    }
    else if (res.cmd === 'roomadded') {
        // let button = utilities.createRoomButton(data, false, streamContext, videos)
        // document.body.querySelector('#rooms').insertAdjacentElement('beforeend', button)
    }
}



// let streamContext = new datastreams.StreamContext({ server, onmessage }) // sets dataDevices on window.navigator


// streamContext.onvideo = (source, id, streamer) => {

//     let div = videos.get(id)
//     if (id === 'me'){

//         // Look for DataStreams
//         div = utilities.videoStreamHandler(streamContext.baseStream, id, streamer, div)

//         // Transform my Video
//         main.videoTransform(source, div.querySelector('video'), streamContext)

//         // Unhide Join Buttons
//         roomprompt.style.display = 'block'

//     } else div = utilities.videoStreamHandler(source, id, streamer, div)

//     videos.set(id, div)


// }

// streamContext.onstreamremoved = (id) => {
//     if (id != 'me'){
//         let div = videos.get(id)
//         div.remove()
//         videos.delete(id)
//     }
// }

// streamContext.onreconnect = (source) => {

//     const streams = videos.get('me')
//     const video = streams?.querySelector('video')
//     video.srcObject = source // swap video

// }


// // Create a WebRTC Room
// create.onclick = () => {
//     streamContext.streamer.createRoom().then()
// }

let rtcVideos = new Map()

let deviceTypes = {}
let deviceTypeAdded = []

// Get All Supported Devices
dataDevices.getSupportedDevices().then((devices) => {
    showDevices(devices)

    for (let key in deviceTypes) {
        let baseKey = key.replace('input', '')
        if (baseKey === 'audio' || baseKey === 'video') {
            let select = deviceTypes[key].element
            let deviceId = select.value
        //     if (deviceId) streamContext.constraints[baseKey] = { deviceId: { exact: deviceId } } // Set StreamContext constraints
        }
    }
})

let showDevices = (devices = []) => {
    devices.forEach(d => {

        let baseKind = d.kind.replace('input', '').replace('output', '')

        // if (baseKind !== 'audio' && baseKind !== 'video') baseKind = 'data' // all non-media is data

        if (!deviceTypeAdded.includes(d.kind)) {

            let isMedia = (baseKind === 'audio' || baseKind === 'video')

            let typeContainer = isMedia ? document.createElement('select') : document.createElement('div')

            typeContainer.onchange = () => {
                let deviceId = typeContainer.value
                // Swap MediaStream Source (e.g. switch to a different camera)
                // if (deviceId) streamContext.setConstraint(baseKind, { deviceId: { exact: deviceId } })
            }

            // deviceTypesContainer.insertAdjacentHTML('beforeend', `<h4>${baseKind.toUpperCase()}</h4>`)
            deviceTypesContainer.insertAdjacentElement('beforeend', typeContainer)

            let button = document.createElement('button')
            if (!d.deviceId && isMedia) {
                button.innerHTML = `Enable ${d.kind.toUpperCase()}`

                // Request MediaStream Permissions (audio/video)
                button.onclick = () => {
                    navigator.mediaDevices.getUserMedia({ [baseKind]: true }).then(showDevices).catch(console.err)
                    deviceTypesContainer.insertAdjacentElement('beforeend', button)
                }

                deviceTypesContainer.insertAdjacentElement('beforeend', button)
            } else {
                button.innerHTML = `Connect ${d.kind.toUpperCase()}`
                if (!isMedia) {

                    // Connect to DataStream Object (bluetooth / usb / serial)
                    button.onclick = () => {
                        dataDevices.getUserStream({ [baseKind]: true }).then((stream) => {

                            console.log(stream)
                            // main.data(stream, streamContext, baseKind) // start processing data
                        }).catch(console.error)
                    }

                    deviceTypesContainer.insertAdjacentElement('beforeend', button)
                }
            }

            deviceTypesContainer.insertAdjacentHTML('beforeend', `<br/><br/>`)

            // Maintain Container References  
            deviceTypeAdded.push(d.kind)

            deviceTypes[d.kind] = {}
            deviceTypes[d.kind].element = typeContainer
        }

        if (baseKind === 'audio' || baseKind === 'video') deviceTypes[d.kind].element.insertAdjacentHTML('afterbegin', `<option value="${d.deviceId}">${d.label || `${baseKind} not enabled`}</option>`)
        else deviceTypes[d.kind].element.insertAdjacentHTML('afterbegin', `<p>${d.label}</p>`)
    })
}

// ---------------------------- Start Video Collection ----------------------------
setTimeout(() => {
    // streamContext.connect() // This will trigger onvideo / onaudio above
}, 1000)
