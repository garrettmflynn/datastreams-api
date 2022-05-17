export type WorkerMessageType = {
    data: {
        cmd: string
        data: any
        // data: ReadableStream | WritableStream | TransformStream | {
        //     source?: ReadableStream
        // }
    }
}