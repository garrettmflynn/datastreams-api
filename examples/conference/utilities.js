import * as main from "./main.js"
import { WebglLinePlotUtils } from '../libraries/webglplotutil/webgl-plot-utils.js';

export let createRoomButton = (r, connected, streamContext, videos) => {

        let button = document.createElement('button')
        let roomname = document.body.querySelector('#roomname')

        // Literally Just Join WebRTC Room
        let joinClick = () => {

                // Handle New Rooms
                streamContext.streamer.onroom = (ev) => {
                    let rooms = (Array.isArray(ev.detail.room)) ? ev.detail.room : [ev.detail.room]
                    addRooms(rooms,streamContext, videos)
                }
        
                // Process Video then Join the Room
                streamContext.streamer.joinRoom(r, 'me').then(res => {
                    if (roomname) roomname.innerHTML = r.name
                    button.innerHTML = `Leave ${r.name}`
                    button.onclick = leaveClick
                })
                
        }

        // Literally Just Leave WebRTC Room
        let leaveClick = () => {
            // streamContext.connect()
            streamContext.streamer.leaveRoom(r).then(res => {
                if (roomname) roomname.innerHTML = 'None'
                button.innerHTML = `Join ${r.name}`
                button.onclick = joinClick
            })
        }
        
        if (!connected) {
            if (roomname) roomname.innerHTML = 'None'
            button.onclick = joinClick
            button.innerHTML = `Join ${r.name}`
        }
        else {
            if (roomname) roomname.innerHTML = r.name
            button.innerHTML = `Leave ${r.name}`
            button.onclick = leaveClick
        }

        return button
}

export let addRooms = (rooms=[], streamContext, videos) => {

    let buttons = []
    rooms.forEach((r) => {
        buttons.push(createRoomButton(r, false, streamContext, videos))
    })

    return buttons
}


export let videoStreamHandler = (source, id, context, div) => {

    if (!div){
        div = document.createElement('div')
        div.style.position = 'relative'

        // Create Video
        let video = document.createElement('video')
        const track = source.getVideoTracks()[0]
        let onVideo = (track) => {
            let settings = track.getSettings()        
            div.style.width = video.style.width = `${300}px`
            div.style.height = video.style.height = `${300 * settings.height / settings.width}px`
            video.autoplay = true
            video.srcObject = source
        }

        div.insertAdjacentElement('beforeend', video)

        if (track) onVideo(track)
        else source.addEventListener('track', (ev) => {
            if (ev.detail.kind === 'video') onVideo(ev.detail)
        })

        // Add Canvas Data Readout
        let canvas = document.createElement('canvas')
        div.insertAdjacentElement('beforeend', canvas)
        canvas.style = `background: black; height: 35%; width: 35%; position: absolute; top: 0; right: 0; z-index: 1;`
        let plotutil = new WebglLinePlotUtils(canvas, false)

        let spss = [], trackBuffers = []

        let initPlot = (currentTracks) => {

            // Plot the Lines
            let nSec = 10;
            let nPointsRenderedPerSec = 60;
            let sps = nSec * nPointsRenderedPerSec

            let length = currentTracks.length
            spss = Array.from({ length }, e => sps)
            trackBuffers = Array.from({ length }, e => [])
            plotutil.initPlot(length, spss, nSec, nPointsRenderedPerSec);
            
            // let i = 0
            currentTracks.forEach((track, i) => {
                track.subscribe((data) => {
                    // if (track.data.length > sps) trackBuffers[i] = track.data.slice(-sps)
                    // else trackBuffers[i] = track.data
                    if (trackBuffers[i].length === 0) trackBuffers[i]  = Array.from({length:sps}, e => data)
                    else {
                        trackBuffers[i].pop()
                        trackBuffers[i].unshift(data)
                    }
                })
            })
        }

        if (id != 'me'){
            let datachannels = []
            context.streamer.ondatachannel = (ev) => {
                console.log('new data channel from remote peer')
                let channel = ev.detail
                if (channel.label.includes('DataStreamTrack')){
                    datachannels.push(channel)
                    initPlot(datachannels)
                }
            }
        } else {

            initPlot(source.getDataTracks())
            source.addEventListener('track', (ev) => {
                initPlot(source.getDataTracks()) 
            })

            source.addEventListener('removetrack', (ev) => {
                initPlot(source.getDataTracks()) 
            })
        }

        let newFrame = () => {
            if (trackBuffers.length > 0) {
                plotutil.updateAllLines(trackBuffers, spss, true);
                plotutil.update();
            }
            requestAnimationFrame(newFrame);
        }

        requestAnimationFrame(newFrame);

        // TODO: External Dependency on UI
        document.body.querySelector('#rtchangout').insertAdjacentElement('beforeend', div)
    } else {
        let video = div.querySelector('video')
        video.srcObject = source
    }

    return div
}