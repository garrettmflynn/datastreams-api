// import Embedder from "./pipes/Embedder.js";
// import Offloader from "./pipes/Offloader.js";

import randomUUID from "../utils/id.js"

import worker, * as workerutils from './pipeline.worker.js' // must export self

import { DataStreamTrackProcessor } from "./DataStreamTrackProcessor"
import { DataStreamTrackGenerator } from "./DataStreamTrackGenerator.js"


export type pipelineType = (TransformStream | ReadableStream | WritableStream)[]
export type boundType = (ReadableStream)[]  // Includes the readable side of a TransformStream 

export class DataPipeline {

    id: string = randomUUID()
    pipeline: pipelineType = []
    bound: boundType = []
    source: ReadableStream | null  = null
    sink: WritableStream | null  = null
    output: DataStreamTrackGenerator | MediaStreamTrackGenerator<any> | null = null
    kind: string = null


    thread: boolean = true
    worker: Worker | null = null


    constructor({thread} = {thread: true}) {

        // Set Worker
        this.thread = thread // NOTE: Complicated transforms may not be able to transferred——and thus interrupt a threaded stream...

        if (this.thread){
            // Set Worker
            try {
                this.worker = new Worker("./src/pipeline.worker.js", { name: 'pipelineworker', type: 'module' });
            } catch {
                try {
                    this.worker = worker as unknown as Worker // TODO: TypeScript issue working with workers
                } catch (err) {
                    console.log("Error creating worker. ERROR:", err);
                }
            }
            this.worker.postMessage({cmd: 'test'})
        }

    }

    setSource = (track) => {

        let processor
        if (track.kind === 'video' || track.kind === 'audio ') {
            if ('MediaStreamTrackProcessor' in window) processor = new MediaStreamTrackProcessor({ track })
            else alert('Your browser does not support the experimental MediaStreamTrack API for Insertable Streams of Media');
        } else {
            processor = new DataStreamTrackProcessor({ track })
        }

        this.kind = track.kind // Guess the kind of stream (and sink...)

        this.source = processor.readable
        if (this.thread) this.worker.postMessage({ cmd: 'source', data: this.source}, [this.source as any]) // TODO: TypeScript issue working with ReadableStreams
        else workerutils.addSource(this.source, this.bound)
    }

    setSink = (kind=this.kind) => {

        if (kind === 'video' || kind === 'audio') {
            if ('MediaStreamTrackGenerator' in window) this.output = new MediaStreamTrackGenerator({ kind: kind as any }) 
            else alert('Your browser does not support the experimental MediaStreamTrack API for Insertable Streams of Media');
        } else {
            this.output = new DataStreamTrackGenerator({ kind })
        }

        this.sink = this.output.writable

        if (this.thread) this.worker.postMessage({ cmd: 'sink', data: this.sink }, [this.sink as any]) // TODO: TypeScript issue working with WritableStreams
        else workerutils.addSink(this.sink, this.bound)
    }

    add = (settings) => {
        let transformer;

        // Passed TransformStream
        if (settings instanceof TransformStream) transformer = settings

        // Create a new TransformStream
        else {

            let transform
            // Basic Function Transformation
            if (settings instanceof Function) transform = { transform: async (chunk, controller) => controller.enqueue(settings(chunk)) }

            // Default Pipe Methods
            else {
                // switch (settings.method) {
                //     case 'offload':
                //         transform = new Offloader(settings)
                //         break;
                //     case 'embed':
                //         transform = new Embedder(settings)
                //         break;
                //     default:
                        transform = { transform: async (chunk, controller) => controller.enqueue(settings.function(chunk)) }
                        // break;
                // }
            }

            transformer = new TransformStream(transform)
        }

        this.pipeline.push(transformer)
        if (this.thread) {
            this.pipeline.push(transformer)
            this.worker.postMessage({ cmd: 'add', data: transformer }, [transformer])
        }
        
        else workerutils.addTransform(transformer, this.pipeline, this.bound)
    }

    // // Subscribe to Streamer Outputs
    // subscribe = (callback, args = [], forceSelf = false) => {
    //     let length = this.pipeline.length
    //     let tracks = this.getTracks()
    //     // Subscribe to Tracks in this DataStream Object
    //     if (length === 0 || forceSelf) {
    //         tracks.forEach(t => {
    //             if (t.kind === 'video' || t.kind === 'audio') {
    //                 console.warn('very loose implementation of audio / video streams')
    //                 let animate = () => {
    //                     callback(args)
    //                     setTimeout(animate, 1000 / 60)
    //                 }
    //                 animate()
    //             }
    //             else t.subscribe(callback) // run callback on each data track
    //         })
    //     }

    //     // Subscribe to Final Pipeline Node
    //     else 
    //     this.pipeline[length - 1].subscribe(callback)
    // }
}