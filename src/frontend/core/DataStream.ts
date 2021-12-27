import { DataStreamTrack } from "./DataStreamTrack"

/* 

Extension of the MediaStream API to handle arbitrary time-series data.

*/

export class DataStream extends MediaStream {// has problems with getting/setting

    // Mirror Attributes from MediaStreams
    tracks: (MediaStreamTrack | DataStreamTrack)[] = []

    // Functions
    _addTrack: Function
    _getTracks: Function


    get [Symbol.toStringTag]() { return 'DataStream' }

    constructor(arg:[] = []) { // can be empty, stream, or tracks
        super(arg)

        // ----------------- Event Listeners -----------------
        // this.ontrack
        // this.onremovetrack
        // this.onactive
        // this.oninactive

        // ----------------- Core Properties -----------------
        // this.id
        // this.active
        this.tracks = this.getTracks()

        // ----------------- Custom Methods -----------------
        // this.addTrack
        // this.getTracks
        this._addTrack = this.addTrack // save original
        this._getTracks = this.getTracks // save original
        this.addTrack = (track: DataStreamTrack | MediaStreamTrack) => {
            if (!this.tracks.includes(track)){ // don't duplicate tracks
                try {this._addTrack(track)} catch {} // Try adding using the MediaStreams API
                this.tracks.push(track)
                this.dispatchEvent(new CustomEvent('track', {detail: track})) // Trigger ontrackadded for local updates (disabled in MediaStreams API)
            }
            return track
        }

        this.getTracks = () => {
            const mediaTracks = this._getTracks()
            const dataTracks = this.getDataTracks()
            return this.tracks = [...mediaTracks, ...dataTracks]
        }
        
    }

    // ---------------------- NEW METHODS ----------------------

    getDataTracks = () => this.tracks.filter(t => !t.kind || (!t.kind.includes('video') && !t.kind.includes('audio')))
}