import { DataStreamTrack } from "./DataStreamTrack"

/**
 * 
 * Create a ReadableStream of sensor data modeled after the Insertable Streams API
 * 
 */

export class DataStreamTrackProcessor {

    track: DataStreamTrack
    subid: null | string
    readable: ReadableStream

    constructor({track}){

        this.track = track
        this.subid = null

        this.readable = new ReadableStream({
            start: this.start,
            pull: this.pull,
            cancel: this.cancel,
            // type,
            // autoAllocateChunkSize
        }, {
            // highWaterMark,
            // size()
        })
    }


// --------------------------- Readable Stream Functions ---------------------------
    start = (controller) => {
    
        // Start Placing Track Data into the ReadableStream
        if (this.track){
    
            this.track.data.forEach((val:any) => controller.enqueue(val))
            this.subid = this.track.subscribe((val:any) => controller.enqueue(val))
        }
    }

    pull = (controller) => {

    }

    cancel = () => {
        if (this.track) this.track.unsubscribe(this.subid)
    }
}