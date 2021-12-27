
import DataPipeline from "../src/DataPipeline.js"
import { WebGLTransform } from '../src/transforms/video/swirl.js';
import DataStream from "../src/DataStream.js";

export const videoTransform = async (stream, video, context) => {

    let pipeline = new DataPipeline({thread: false})
    const track = stream.getVideoTracks()[0];
    // stream.removeTrack(track); // remove original track
    pipeline.setSource(track)

    // ---------------- Skew (slow) ----------------
    // let frametransform = new WebGLTransform()
    // frametransform.init()
    // let transform = async (frame, controller) => {
    //     await frametransform.transform(frame, controller);
    // }

    // ---------------- No Transformation ----------------
     let transform = async (frame, controller) => {
        controller.enqueue(frame)
    }

    const transformer = new TransformStream({transform})
    pipeline.add(transformer)
    pipeline.setSink()

    // Produce New Stream with All Tracks from Previous
    const streamAfter = new DataStream([pipeline.output]);
    stream.getAudioTracks().forEach(streamAfter.addTrack)
    stream.getDataTracks().forEach(streamAfter.addTrack)

    video.srcObject = streamAfter; // replace original video
    streamAfter.getTracks().forEach(context.baseStream.addTrack) // adds tracks to stream

    // ----------------------------------  GPU Pipe | Edge Detection (local only) ----------------------------------
    // stream.gpu({
    //     name: 'test', // kernel name
    //     element: videos.get('me').querySelector('video'), // video element
    //     args: [[-1, -1, -1, -1,  8, -1, -1, -1, -1]], // convolution kernels (for image)
    //     function: () => {} // kernel function
    // })

    // Stream this DataStream Object
    context.streamer.add(context.baseStream) // stream already in context...
    // streamContext.addStream(streamAfter, 'me', 'video') // macro to track for self AND peers

    return streamAfter

}

// ---------------------------------- Insertable Streams Format ----------------------------------
export const data = async (stream, streamContext, baseKind) => {

    // Begin Processing Tracks
    let dataTracks = stream.getDataTracks()
    
    // Create another pipeline when new tracks are added to this stream
    stream.addEventListener('track', (ev) => {
        if (ev.detail.constructor.name === 'DataStreamTrack') createPipeline(ev.detail) // only pipe raw tracks
    })


    let createPipeline = (track) => {

        let pipeline = new DataPipeline() // puts everything in a worker
        pipeline.setSource(track)
        // pipeline.add((v) => {return v * Math.random()}) // arithmetic.add(v,1)
        // pipeline.add({method: 'offload', function: (v) => {return v * 100}}) // arithmetic.add(v,1)
        pipeline.setSink()

        // newStream.addTrack(pipeline.output)
        streamContext.baseStream.addTrack(pipeline.output)

    }

    // Add Transforms
    dataTracks.forEach(createPipeline)
}