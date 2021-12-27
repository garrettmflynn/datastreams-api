import { DataStreamTrack } from "./DataStreamTrack"

/**
 * 
 * Create a ReadableStream of sensor data modeled after the Insertable Streams API
 * 
 */

export class DataStreamTrackProcessor {

    track: DataStreamTrack
    subid?: string
    readable: ReadableStream

    constructor(o:{track: DataStreamTrack}){

        this.track = o.track

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
    start = (controller:ReadableStreamController<any>) => {
    
        // Start Placing Track Data into the ReadableStream
        if (this.track){
    
            this.track.data.forEach((val:any) => controller.enqueue(val))
            this.subid = this.track.subscribe((val:any) => controller.enqueue(val))
        }
    }

    pull = () => {}

    cancel = () => {
        if (this.track && this.subid) this.track.unsubscribe(this.subid)
    }
}