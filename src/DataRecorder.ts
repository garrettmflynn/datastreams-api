import { DataStreamTrack } from './DataStreamTrack'
import { Encoder, EncoderOptions } from './files/encoders'
import CSVEncoder from './files/encoders/csv'
import { Device } from './devices/Device'

// Records data to a file

export type MimeTypes = 'application/json' | 'text/csv' | 'application/x-hdf' | string
type DestinationType = 'file' | 'browser'
type StateType = 'inactive' | 'recording' | 'paused'

type RecorderOptions = {
    mimeType?: MimeTypes
    destination?: DestinationType
    // bitsPerSecond?: Number
}

type SaveOptions = RecorderOptions & {
    destination?: DestinationType
}

export type DataType = {
    data: {[x:string]: any},
    timestamps: number,
    track: DataStreamTrack
}

export class DataRecorder extends EventTarget {

    mimeType: RecorderOptions['mimeType'] = 'application/json'
    state: StateType = 'inactive'
    device: Device<any>;
    // bitsPerSecond: RecorderOptions['bitsPerSecond'] = 0; // dynamic or applied from options
    data: DataType['data'] = {}
    destination: RecorderOptions['destination'] = 'file'
    encoders: Map<MimeTypes, Encoder> = new Map()

    constructor (device:Device<any>, options:RecorderOptions={}) {
        super()

        this.device = device
        if (options.mimeType) this.mimeType = options.mimeType
        if (options.destination) this.destination = options.destination
        // if (options.bitsPerSecond) this.bitsPerSecond = options.bitsPerSecond

        this.load(new Encoder()) // Add JSON Encoder
        this.load(new CSVEncoder()) // Add CSV Encoder

        // Listen to Events
        const events = ['dataavailable', 'error', 'pause', 'resume', 'start', 'stop']
        events.forEach(str => this.addEventListener(str, (ev) => {
            const f = (this as any)[`on${str}`]
            f(ev)
        })) // Call onX event handler

        // ------------- Handle All Tracks -------------
        // let averageBPS = [] // Calculate average bits per second for this recording...

        const handleTrack = (track:any) => {
            track.subscribe((data:any, timestamps:number) => {

                // if (options.bitsPerSecond) {
                //     this.bitsPerSecond = averageBPS.reduce(v => v)
                // }


                this.dataavailable({data, timestamps, track})
            })
        }

        if (this.device.stream){
            this.device.stream.tracks.forEach(handleTrack)
            this.device.stream.onaddtrack = (e:TrackEvent) => handleTrack(e.track)
        } else this._throw('No active stream on the Device from the constructor.', 'warn')
    }

    // ------------------- User-Specifiable Events -------------------
    ondataavailable = () => {}
    onerror = () => {}
    onpause = () => {}
    onresume = () => {}
    onstart = () => {}
    onstop = () => {} 


    // ------------------- Methods -------------------
    private dataavailable = (detail:DataType) => {
        if (this.state === 'recording'){

            // Push Data
            if (!this.data[detail.track.contentHint]) this.data[detail.track.contentHint] = {
                data: [],
                timestamps: []
            }
            this.data[detail.track.contentHint].data.push( ... (!Array.isArray(detail.data)) ? [detail.data] : detail.data)
            this.data[detail.track.contentHint].timestamps.push( ... (!Array.isArray(detail.timestamps)) ? [detail.timestamps] : detail.timestamps)

            // Dispatch Event
            this.dispatchEvent(new CustomEvent('dataavailable', {detail}))
        }
    }

    requestData = (options:EncoderOptions={}) => {
        // Check MimeType Support
        const mimeType = options.mimeType ?? this.mimeType
        if (mimeType){
            const supported = this.isTypeSupported(mimeType)
            if  (supported) {
                const encoder = this.encoders.get(mimeType)
                if (encoder) {

                    const objectToEncode = Object.assign({}, this.data)

                    // Device Info
                    objectToEncode.device = {
                        name: this.device.constraints.label,
                        bluetooth: this.device.constraints.bluetooth,
                        serial: this.device.constraints.serial,
                        websocket: this.device.constraints.websocket,
                    }

                    // Recording Sampling Rate
                    // objectToEncode.bitsPerSecond = this.bitsPerSecond

                    const encoded = encoder.encode(objectToEncode, options)
                    const blob = new Blob([encoded], {type: mimeType}) // Export as Blob
                    return blob
                } else return undefined
            } else {
                const error = new DOMException(`The mimetype '${mimeType}' is not supported.`, 'NotSupportedError')
                this.dispatchEvent(new CustomEvent('error', {detail: error}))
                throw error // TODO: Should this actually be thrown?
            }
        } else return undefined
    }

    private _throw = (msg:string, type: "warn" | "error" | "log" = "error") => {
        const error = new Error(msg)
        this.dispatchEvent(new CustomEvent('error', {detail: error}))
        console[type](error) // TODO: Should this actually be thrown?
    }

    pause = () => {
        if (this.state === 'recording'){
            this.state = 'paused'
            this.dispatchEvent(new CustomEvent('pause'))
        } else {
            this._throw(`Recording cannot be paused from ${this.state} state`, 'warn')
        }
    }

    resume = () => {
        if (this.state === 'paused'){
            this.state = 'recording'
            this.dispatchEvent(new CustomEvent('resume'))
        } else {
            this._throw(`Recording cannot be resumed from ${this.state} state`, 'warn')
        }
    }

    start = () => {
        if (this.state === 'inactive'){
            this.state = 'recording'
            this.dispatchEvent(new CustomEvent('start'))
        } else {
            this._throw(`Recording already started`)
        }
    }

    stop = () => {
        if (this.state != 'inactive'){
            this.state = 'inactive'
            this.dispatchEvent(new CustomEvent('stop'))
        }else {
            this._throw(`Recording cannot be stopped from ${this.state} state`, 'warn')
        }
    }

    isTypeSupported = (type:MimeTypes) => !!Array.from(this.encoders.values()).find(encoder => encoder.mimeType === type)

    // ------------------- Macros -------------------
    // Adds an encoder to the internal Map
    load = (encoder:any) => {
        this.encoders.set(encoder.mimeType, encoder)
    }

    save = (name = 'recording', options:SaveOptions={}) => {

        if (!options.mimeType) options.mimeType = this.mimeType
        if (!options.destination) options.destination = this.destination

        const blob = this.requestData(options)

        if (blob){
        switch (options.destination) {
            case 'browser':
                // Handle IndexedDB calls
                console.log('IndexedDB', blob)
                break;

            default:
                // Handle file export
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${name}.${options.mimeType?.split('/')[1]}` || 'download';
                a.click()
                break;
        }
        }
    }
}