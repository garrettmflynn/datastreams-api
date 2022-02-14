import { DataStreamTrack } from "./DataStreamTrack"

/* 

Extension of the MediaStream API to handle arbitrary time-series data.

*/

export class DataStream extends MediaStream {// has problems with getting/setting

    // Mirror Attributes from MediaStreams
    tracks: Map<(string | number), (MediaStreamTrack | DataStreamTrack)> = new Map()
    onaddtrack: any // remove TS limitation on arguments
    

    // Functions
    addTrack: (track: DataStreamTrack | MediaStreamTrack) => DataStreamTrack | MediaStreamTrack = this.addTrack
    _addTrack: Function
    _getTracks: Function
    _removeTrack: Function

    get [Symbol.toStringTag]() { return 'DataStream' }

    constructor(arg: DataStream | DataStreamTrack[] | MediaStream | MediaStreamTrack[] = []) { // can be empty, stream, or tracks
        super(arg as any)

        // ----------------- Event Listeners -----------------
        // this.ontrack
        // this.onremovetrack
        // this.onactive
        // this.oninactive

        // ----------------- Core Properties -----------------
        // this.id
        // this.active

        // ----------------- Custom Methods -----------------
        // this.addTrack
        // this.getTracks
        this._addTrack = this.addTrack // save original
        this._getTracks = this.getTracks // save original
        this._removeTrack = this.removeTrack // save original

        this.addTrack = (track: DataStreamTrack | MediaStreamTrack) => {
            if (![...this.tracks.values()].includes(track)){ // don't duplicate tracks
                if (track instanceof MediaStreamTrack) {
                    this._addTrack(track) // Add track using the MediaStreams API
                    track = new DataStreamTrack(undefined, (track as MediaStreamTrack)) // Add track using our DataStreams API
                }
                this.tracks.set(track.contentHint || this.tracks.size, track)
                this.dispatchEvent(new CustomEvent('addtrack', {detail: track})) // Trigger ontrackadded for local updates (disabled in MediaStreams API)
            }
            return track
        }

        this.removeTrack = (track: DataStreamTrack | MediaStreamTrack) => {

            if ([...this.tracks.values()].includes(track)){
                try {this._removeTrack(track)} catch {} // Try adding using the MediaStreams API
                for (let [key, value] of this.tracks.entries()) {
                    if (value === track){
                        this.tracks.delete(key)
                        this.dispatchEvent(new CustomEvent('removetrack', {detail: track})) // Trigger ontrackadded for local updates (disabled in MediaStreams API)
                    }
                }
            }
            return track
        }

        this.getTracks = () => {
            const mediaTracks = this._getTracks()
            const dataTracks = this.getDataTracks()
            return [...mediaTracks, ...dataTracks]
        }

        this.addEventListener('addtrack', ((ev: any) => {
            ev.track = ev.detail
            delete ev.detail
        }) as EventListener)

        this.addEventListener('removetrack', ((ev: any) => {
            ev.track = ev.detail
            delete ev.detail
        }) as EventListener)
    }

    // ---------------------- NEW METHODS ----------------------

    getDataTracks = () => [...this.tracks.values()]
}