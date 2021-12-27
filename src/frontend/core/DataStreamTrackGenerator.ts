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

    // sets up the stream functionality, e.g. getting access to the underlying sink
     start = (controller) => {
        // console.log("Chunk received", chunk);
    }
    //  called repeatedly every time a new chunk is ready to be written to the underlying sink
     write = (chunk, controller) => {
        // console.log("Chunk received", chunk);
        this.addData(chunk)
    }

    //  finalize writes to the underlying sink, and release access to it.
    close = (controller) => {
        console.log("All data successfully read!");
    }

    // will be called if the app signals that it wishes to abruptly close the stream and put it in an errored state
    abort = (reason) => {
        console.error("Something went wrong!", reason);
    }

}



// --------------------------- Writable Stream Functions ---------------------------

// sets up the stream functionality, e.g. getting access to the underlying sink
function start(controller) {
    // console.log("Chunk received", chunk);
}
//  called repeatedly every time a new chunk is ready to be written to the underlying sink
function write(chunk, controller) {
    console.log("Chunk received", chunk);
    this.data.push(chunk)
}

//  finalize writes to the underlying sink, and release access to it.
function close(controller) {
    console.log("All data successfully read!");
}

// will be called if the app signals that it wishes to abruptly close the stream and put it in an errored state
function abort(reason) {
    console.error("Something went wrong!", reason);
}