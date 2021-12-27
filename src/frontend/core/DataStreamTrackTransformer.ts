/**
 * 
 * Create a TransformStream for sensor data | modeled after the Insertable Streams API
 * 
 */

export class DataStreamTrackTransform {

    transform: TransformStream

    constructor({transform}){

        this.transform = new TransformStream({
            start,
            flush,
            transform
        })
    }
}



// --------------------------- Transform Stream Functions ---------------------------

//beginning generation of data or otherwise getting access to the source
function start(controller) {
    // Called immediately when the TransformStream is created

}

function flush(controller) {
// Called when chunks are no longer being forwarded to the transformer
}