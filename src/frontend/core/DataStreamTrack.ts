import {DataTrackSettings} from "./DataTrackSettings.js"
import {DataTrackCapabilities} from "./DataTrackCapabilities.js"
import randomUUID from "./utils/id.js"
import { DataTrackConstraints } from "./DataTrackConstraints.js"

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
    callbacks: Map<string,Function> = new Map()
    pipeline: any[] = []

    get [Symbol.toStringTag]() { return 'DataStreamTrack' }

    constructor (device={}) {
        super()

        this.contentHint = ''
        this.enabled = ''
        this.id = device.id ?? randomUUID()
        this.kind = device.constraints?.kind
        if (this.kind) this.kind = this.kind.replace('input','').replace('output', '')
        this.label = device.constraints?.label
        this.muted = ''
        this.readyState = ''
        this.remote = ''
        this.callbacks = new Map()
        this.data = []

        this.pipeline = []
    }

    deinit = () => {
        this.dispatchEvent(new Event('ended'))
    }

    applyConstraints = async (constraint) => {
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

    }

    addData = (val) => {
        if (Array.isArray(val)) this.data.push(...val)
        else this.data.push(val)
        this.ondata(val)
    }

    // Data Readout
    ondata = (data) => {
        this.callbacks.forEach((f) => {
            f(data)
        })
    }

    subscribe = (callback) => {
        let id = randomUUID()
        this.callbacks.set(id,callback)
        return id
    }

    unsubscribe = (id) => {
        this.callbacks.delete(id)
    }

    onended = () => {
        this.readyState = 'ended'
    }
    onisolationchange = () => {}
    onmute = () => {}
    onunmute = () => {}
}