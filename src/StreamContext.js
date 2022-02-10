window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;


import * as datastreams from './index.js'
import Streamer from './pipes/Streamer.js';
import WebSocket from './pipes/WebSocket';

/** 
 * StreamContext manager class for the DataStreams API
 * 
 * Revision History
 * Garrett Flynn, November 2021
 * 
 * License
 * AGPL
 */

export default class StreamContext {

    constructor({ server, auth, onmessage} = {}) {

        if (!onmessage) onmessage = () => {}
        if (!server) server = 'http://localhost'

        this.dataDevices = navigator.dataDevices
        this.streams = new Map()

        this.baseStream = new datastreams.DataStream() // canonical source

        // Initialize AudioContext to handle audio processing
        this.audioContext = null

        // Initialize WebSocket for offloading computations and coordinating WebRTC connections
        this.socket = null
        if (server) this.socket = new WebSocket(server, auth)

        this.active = false

        // Default OnMessage until Actually Connected to WebRTC
        this.socket.onmessage = onmessage

        // ---------------------------------- Device Constraints ---------------------------------- 
        this.constraints = { server, socket:this.socket } // context-wide constraints
        
        // ---------------------------------- Event Listeners ---------------------------------- 
        this.onvideo = () => {}
        this.onreconnect = () => {}
        this.onstreamremoved = () => {}
    

        //  ---------------------------------- WebRTC Stream Manager ---------------------------------- 
        this.streamer = new Streamer({socket: this.socket})

        // Handle Room Closure
        this.streamer.onroomclosed = () => {
            this.active = false
            this.streams.forEach((v, k) => {
                this.onstreamremoved(k)
                this.removeStream(k)
            })
        }

        // Load Peer Streams into the Context
        this.streamer.ontrack = (ev) => {
            const newStream = new MediaStream();
            newStream.addTrack(ev.detail.track)
            if (ev.detail.track.kind === 'video') this.addStream(newStream, ev.detail.id, 'video')
            else if (ev.detail.track.kind === 'audio') this.addStream(newStream, ev.detail.id, 'audio')
        }

        // Remove Peer Streams
        this.streamer.onpeerdisconnect = (ev) => {
            this.onstreamremoved(ev.detail.id)
            this.removeStream(ev.detail.id)
        }

        // ---------------------------------- Track Streams by Peer ----------------------------------
        this.streams = new Map()

    }

    // ------------------------------------------- Device Connection -------------------------------------------
    // Possible devices: {audio, video, eeg, fnirs}

    // Connect devices to the StreamContext based on current constraints.
    connect = async () => {
        let source = await navigator.dataDevices.getUserDevice(this.constraints)
        return await this.handleConnect(source)
    }

    // ------------------------------------------- Constraint Management -------------------------------------------
    // Possible constraints: {audio, video, eeg, fnirs}

    // Set new constraints on the StreamContext.
    setConstraint = (kind, value) => {
        this.constraints[kind] = value
        this.onconstraintchanged()
    }

    // Swap devices based on new constraints. Currently only handles audio/video tracks
    onconstraintchanged = async () => {

        if (this.active) {

            let source = await navigator.dataDevices.getUserDevice(this.constraints)

            let tracks = []
            let myStreams = this.streams.get('me')
            if (myStreams.audio) tracks.push(myStreams.audio.stream.getAudioTracks()[0])
            if (myStreams.video) tracks.push(myStreams.video.stream.getVideoTracks()[0])

            // Swap Tracks
            tracks.forEach(track => {

                // On Peers: Not working despite following https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/replaceTrack
                this.streamer.peers.forEach(p => {
                    let sender = p.getSenders().find(function (s) {
                        return s.track?.kind == track.kind;
                    });

                    sender.replaceTrack(track);
                })

                //  Trigger Changes on Self
                if (track.kind === 'video') {
                    this.onvideo(source, 'me', this)
                } else if (track.kind === 'audio') {
                    this.removeStream('me', 'audio')
                    this.addStream(source, 'me', 'audio')
                }
            })

        }
    }

    handleConnect = async (source) => {

        return new Promise((resolve, reject)=> {

            // Handle Audio Sources
            let audioTracks = source.getAudioTracks()
            if (audioTracks.length > 0) this.addStream(source, 'me', 'audio')

            // Handle Video Sources
            let videoTracks = source.getVideoTracks()
            let videoTrack = videoTracks[0]

            if (this.active) {
                this.onreconnect(source)
                reject('already connected')
            } else {
                this.active = true
                if (videoTrack && source) this.addStream(source, 'me', 'video', videoTrack)
                resolve(source)
            }
        })
    }

    // ------------------------------------------- Stream Management -------------------------------------------

    removeStream = (id, type) => {
        let streams = this.streams.get(id)
        for (let kind in streams){
            const match = (!type  || type === kind)
            if (kind === 'video' && match) {
                delete streams.video
            }
            else if (kind === 'audio' || match){
                streams.audio.onended()
                delete streams.audio
            }
        }
        if (!type) this.streams.delete(id)
    }

    addStream = (stream, id, kind) => {

        this.constraints[kind] = stream // directly add stream
        let o = this.streams.get(id)
        if (!o) {
            o = {}
            this.streams.set(id, o)
        }

        // Set Stream Variables in Map
        if (kind === 'audio'){
            if (!this.audioContext) this.initAudio()

            // Create a filter node.
            var filterNode = this.audioContext.createBiquadFilter();
            filterNode.type = 'highpass';
            filterNode.frequency.value = 8000;
    
            var gainNode = this.audioContext.createGain(); // Create a gain node to change audio volume.
            let source = this.audioContext.createMediaStreamSource(stream);  // Create an AudioNode from the stream.
            
            source.connect(filterNode);
            filterNode.connect(gainNode);

            let onended = () => {
                source.disconnect();
                gainNode.disconnect();
                filterNode.disconnect()
            }
    
            source.onended = onended
            gainNode.connect(this.gainNode); // add to main audio
    
            o[kind] = { stream, source, onended }
        }

        else if (kind === 'video') {
            this.onvideo(stream, id, this)
            o[kind] = {stream}
        } else {
            o[kind] = {stream}
        }
    }

    initAudio = () => {

        // AudioContext
        if (!this.audioContext) {
            if (typeof AudioContext === 'function') {
                this.audioContext = new AudioContext();
            } else {
                this.audioContext = false
                alert('Sorry! Web Audio not supported.');
            }

            this.gainNode = this.audioContext.createGain();

            // Analyze Main Audio
            this.analyserNode = this.audioContext.createAnalyser();
            this.analyserNode.fftSize = 2048;

            this.gainNode.connect(this.analyserNode); // analyze main audio

            // Output to Main Audio
            this.outputNode = this.audioContext.destination;
            this.analyserNode.connect(this.outputNode); // output main audio
        }
    }
}