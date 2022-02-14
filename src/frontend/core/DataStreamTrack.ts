import { DataTrackSettings } from "./DataTrackSettings"
import { DataTrackCapabilities } from "./DataTrackCapabilities"
import { randomUUID } from "../../common/id"
import { DataTrackConstraints } from "./DataTrackConstraints"
import { Device } from "../devices/Device"
import { ReadableStreamController } from 'stream/web'

// NOTE: This class allows the conversion of independent data coming from Device classes
// to a ReadableStream format.

export class DataStreamTrack extends EventTarget {

    // Mirror Attributes from MediaStreamTrack
    contentHint: string = ''
    enabled: boolean = false
    isolated: boolean = false
    muted: boolean = false
    remote: boolean = false
    id: string = ''
    kind: string = ''
    label: string = ''
    readyState: MediaStreamTrackState = 'live'


    // New Attributes
    data: any[] = []
    controller?: ReadableStreamController<any>;
    readable: ReadableStream;
    writable: WritableStream = new WritableStream({
        start: () => { },
        write: (chunk: any) => this.addData(chunk),
        // close: () => console.log("All data successfully read!"),
        // abort: (reason: any) => console.error("Something went wrong!", reason),
    })

    callbacks: Map<string, Function> = new Map()
    pipeline: any[] = []
    _bufferSize: number = 256 * 60 * 2

    get [Symbol.toStringTag]() { return 'DataStreamTrack' }

    constructor(
        device?: Device<any>,       // Get Track Details
        track?:MediaStreamTrack     // Get Readable Stream from MediaStreamTrack
    ) {
        super()

        this.id = device?.id ?? randomUUID()
        this.kind = device?.constraints?.kind ?? this.kind
        this.label = device?.constraints?.label ?? this.label
        this.callbacks = new Map()
        this.data = []

        this._bufferSize = device?.constraints?.bufferSize ?? this._bufferSize

        this.pipeline = []


        const pull = () => {}
        const cancel = () => this.controller = undefined
        this.readable = new ReadableStream({
            start: (controller: ReadableStreamController<any>) => { this.controller = controller },
            pull,
            cancel
        })

        if (track) {

            if ('MediaStreamTrackProcessor' in globalThis){
                
                // Get Readable Stream from Media Stream
                const readable = (new MediaStreamTrackProcessor({ track: track as any}))?.readable

                // Pipe Stream to Data Buffer
                const [r1,r2] = readable.tee()
                r1.pipeTo(new WritableStream({
                    start: () => { },
                    write: (chunk: any) => this.addData(chunk),
                    // close: () => console.log("All data successfully read!"),
                    // abort: (reason: any) => console.error("Something went wrong!", reason),
                }))

                // Assign Main Readable
                this.readable = r2

            } else {
                alert('Your browser does not support the experimental MediaStreamTrack API for Insertable Streams of Media');
            }
        }
    }

    deinit = () => {
        this.dispatchEvent(new Event('ended'))
    }

    // TODO: Allow constraints to apply to the selected track
    applyConstraints = async () => {
        // if (constraint.mute) this.dispatchEvent(new Event('mute'))
        // else this.dispatchEvent(new Event('unmute'))
    }

    clone = () => {
        return this // TODO: should actually clone
    }

    getCapabilities = () => {
        return new DataTrackCapabilities(this)
    }

    getConstraints = () => {
        return new DataTrackConstraints(this)
    }

    getSettings = () => {
        return new DataTrackSettings(this)
    }

    stop = () => {
        this.readable.cancel()
        this.writable.abort()
    }

    addData = (val: any) => {
        if (Array.isArray(val)) {
            this.data.push(...val)
            if (this.controller) val.forEach(this.controller?.enqueue)
        }
        else {
            this.data.push(val)
            this.controller?.enqueue()
        }

        this.controller?.enqueue()

        const diff = this.data.length - this._bufferSize

        for (let i = diff; i > 0; i--) this.data.shift()

        this.ondata(val)
    }

    // Data Readout
    ondata = (data: any) => {
        this.callbacks.forEach((f) => {
            f(data)
        })
    }

    subscribe = (callback: Function) => {
        let id = randomUUID()
        this.callbacks.set(id, callback)
        return id
    }

    unsubscribe = (id: string) => this.callbacks.delete(id)
}