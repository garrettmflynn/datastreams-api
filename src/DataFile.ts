import { DataStream } from './DataStream'
import { MimeTypes } from './DataRecorder'
import { Decoder, DecoderOptions } from './files/decoders'
import CSVDecoder from './files/decoders/csv'
import { DataStreamTrack } from './DataStreamTrack'

type StateType = 'inactive' | 'playback' | 'paused'

// Records data to a file
export class DataFile extends DataStream {

    blob: Blob
    decoders: Map<MimeTypes, any> = new Map()
    mimeType: MimeTypes = 'application/json'
    state: StateType = 'inactive'
    data: {[x:string]: any} = {}
    info: {[x:string]: any} = {tracks: []}

    constructor (blob:Blob, options: DecoderOptions={}) {
        super()
        this.blob = blob
        this.load(new Decoder())
        this.load(new CSVDecoder())
        this.parse(options).then(() => {
            if (options.autoplay) this.start() // Autostart
        })
    }


    parse = async (options:DecoderOptions) => {
        // Check MimeType Support
            const supported = this.isTypeSupported(this.blob.type)
            if  (supported) {
                const decoder = this.decoders.get(this.blob.type)
                if (decoder) {
                    const decoded = await decoder.decode(this.blob, options)

                    const keys = Object.keys(decoded)
                    this.info.tracks = Object.values(decoded).filter((o:any, i:number) => {
                        if ('timestamps' in o && 'data' in o){
                            o.contentHint = keys[i]
                            return true
                        } else return false
                    })

                    this.info.minTime = Math.min(...this.info.tracks.map((o:any) => Math.min(...o.timestamps)))
                    this.info.tracks.forEach((o:any) => o.timestamps = o.timestamps.map((t:number) => t - this.info.minTime))

                    // Create DataTrack Instances
                    this.info.tracks.forEach((o:any) => {
                        o.track = new DataStreamTrack(undefined, undefined, o.contentHint)
                        this.addTrack(o.track)
                    })

                    return decoded
                } else throw new Error('No supported decoder.')
            } else {
                const error = new DOMException(`The mimetype '${this.blob.type}' is not supported.`, 'NotSupportedError')
                this.dispatchEvent(new CustomEvent('error', {detail: error}))
                throw error // TODO: Should this actually be thrown?
            }
    }

    private _throw = (msg:string, type: "warn" | "error" | "log" = "error") => {
        const error = new Error(msg)
        this.dispatchEvent(new CustomEvent('error', {detail: error}))
        console[type](error) // TODO: Should this actually be thrown?
    }

    pause = () => {
        if (this.state === 'playback'){
            this.state = 'paused'
            this.dispatchEvent(new CustomEvent('pause'))
        } else {
            this._throw(`Playback cannot be paused from ${this.state} state`, 'warn')
        }
    }

    resume = () => {
        if (this.state === 'paused'){
            this.state = 'playback'
            this.dispatchEvent(new CustomEvent('resume'))
        } else {
            this._throw(`Playback cannot be resumed from ${this.state} state`, 'warn')
        }
    }

    start = () => {
        if (this.state === 'inactive'){
            this.state = 'playback'
            console.log('started')

            // Run Animation
            const playbackSpeed = 1
            let msElapsed = 0

            // copy tracks so that .shift() doesn't remove the data
            const trackCopies = this.info.tracks.map((o:any) => {return {data: [...o.data], timestamps: [...o.timestamps], track: o.track}})

            const animate = () => {

                console.log('ANIMATING!')


                if (this.state === 'playback') msElapsed++ 

                const checkShift = (o:any) => {
                    if (o.timestamps[0] < msElapsed){
                        const time = o.timestamps.shift()
                        const data = o.data.shift()
                        o.track.ondata(data, this.info.minTime + time) // actual time
                        checkShift(o)
                    }
                }

                const checkToStop = trackCopies.map((o:any) => {
                    if (o.timestamps.length > 0){
                        checkShift(o)
                        return false
                    } return true
                })

                const toStop = !!checkToStop.reduce((a:number,b:number) => a * b, 0)

                if (toStop) this.stop()
                if (this.state != 'inactive') setTimeout(animate, 1*playbackSpeed)
            }

            animate()

            this.dispatchEvent(new CustomEvent('start'))
        } else {
            this._throw(`Playback already started`)
        }
    }

    stop = () => {
        if (this.state != 'inactive'){
            this.state = 'inactive'
            this.dispatchEvent(new CustomEvent('stop'))
        }else {
            this._throw(`Playback cannot be stopped from ${this.state} state`, 'warn')
        }
    }

    isTypeSupported = (type:MimeTypes) => !!Array.from(this.decoders.values()).find(encoder => encoder.mimeType === type)

    // ------------------- Macros -------------------
    // Adds an decoder to the internal Map
    load = (decoder:any) => this.decoders.set(decoder.mimeType, decoder)
}