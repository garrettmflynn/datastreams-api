import {DataTrackSettings} from "./DataTrackSettings"
import {DataTrackCapabilities} from "./DataTrackCapabilities"
import {randomUUID} from "../../common/id"
import { DataTrackConstraints } from "./DataTrackConstraints"
import { Device } from "../devices/Device"

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

    constructor (device?:Device<any>) {
        super()

        this.contentHint = ''
        this.id = device?.id ?? randomUUID()
        this.kind = device?.constraints?.kind
        if (this.kind) this.kind = this.kind.replace('input','').replace('output', '')
        this.label = device?.constraints?.label
        this.callbacks = new Map()
        this.data = []

        this.pipeline = []
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

    }

    addData = (val:any) => {
        if (Array.isArray(val)) this.data.push(...val)
        else this.data.push(val)
        this.ondata(val)
    }

    // Data Readout
    ondata = (data:any) => {
        this.callbacks.forEach((f) => {
            f(data)
        })
    }

    subscribe = (callback:Function) => {
        let id = randomUUID()
        this.callbacks.set(id,callback)
        return id
    }

    unsubscribe = (id:string) => {
        this.callbacks.delete(id)
    }

    onended = () => {
        this.readyState = 'ended'
    }
    onisolationchange = () => {}
    onmute = () => {}
    onunmute = () => {}
}