// --------------------------- Pipeline Global Variables ---------------------------
import {pipelineType, boundType} from './DataPipeline' 

// Ensure Proper Pipeline Format
let pipeline:pipelineType = []

// Bind Pipeline
let bound:boundType = []

// --------------------------- Pipeline Functions ---------------------------
export let addSource = (source:ReadableStream, bound:boundType) => bound.push(source) // Push source at the beginning
export let addSink = (sink: WritableStream, bound: boundType) => bound[bound.length - 1].pipeTo(sink)

export let addTransform = (
    o: TransformStream, 
    pipeline: pipelineType, 
    bound: boundType // Includes the readable side of a TransformStream 
    ) => {
        pipeline.push(o)
        bound.push(bound[bound.length - 1].pipeThrough(o))
    }


// --------------------------- Pipeline Construction ---------------------------

self.onmessage = async (e) => {
    if (e.data.cmd === 'init') e.data.data.source.pipeThrough(e.data.data.transformer).pipeTo(e.data.data.sink)
    if (e.data.cmd === 'add') addTransform(e.data.data, pipeline, bound)
    if (e.data.cmd === 'source') addSource(e.data.data, bound)
    if (e.data.cmd === 'sink') addSink(e.data.data, bound)
}

export default self