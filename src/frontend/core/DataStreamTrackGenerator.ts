/**
 * 
 * Create a WritableStream of sensor data modeled after the Insertable Streams API
 * 
 */

import { DataStreamTrack } from "./DataStreamTrack";

export class DataStreamTrackGenerator extends DataStreamTrack {

    writable: WritableStream

    constructor(){
        super()

        this.writable = new WritableStream({
            start: this.start,
            write: this.write, 
            close: this.close,
            abort: this.abort
        })

    }

    // --------------------------- Writable Stream Methods ---------------------------

    // sets up the stream functionality, e.g. getting access to the underlying sink
     start = () => {}

    //  called repeatedly every time a new chunk is ready to be written to the underlying sink
     write = (chunk:any) => this.addData(chunk)

    //  finalize writes to the underlying sink, and release access to it.
    close = () => console.log("All data successfully read!");

    // will be called if the app signals that it wishes to abruptly close the stream and put it in an errored state
    abort = (reason:any) => console.error("Something went wrong!", reason);

}