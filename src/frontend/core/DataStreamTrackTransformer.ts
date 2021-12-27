/**
 * 
 * Create a TransformStream for sensor data | modeled after the Insertable Streams API
 * 
 */

export class DataStreamTrackTransform {

    transform: TransformStream

    constructor(dict: {transform: (value:any, controller:TransformStreamDefaultController) => Promise<any>}){

        this.transform = new TransformStream({
            start,
            flush,
            transform: dict.transform
        })
    }
}



// --------------------------- Transform Stream Functions ---------------------------

//beginning generation of data or otherwise getting access to the source
function start() {}

function flush() {}