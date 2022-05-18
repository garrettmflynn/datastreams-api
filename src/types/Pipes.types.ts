import { Websocket } from '../utils/WebSocket'
import { DataStream } from '../DataStream'
import { DataChannel } from '../index'

export type PipeTypes = 'server' | 'stream' | 'gpu' | 'device'

export type PipeCallbackType = (data:any) => any

export type PipeSettingsType = {

    // General
    callback?: PipeCallbackType,

    // ServerPipe / Streamer
    socket?: Websocket;
    server?: string,
    auth?: string,

    // PeerPipe
    source?: DataStream,

    // GPU
    element?: HTMLVideoElement

    // ServerPipe / HardwarePipe
    function?: (args: any[]) => {}

}


// -------------------- DataChannel Types --------------------
export type DataChannelInfoType = {

    // Type #1: Local
    name?: string, 
    peer?: string, 
    reciprocated?:boolean

    // Type #2: Remote
    channel?: DataChannel | RTCDataChannel, 
    callback?: DataChannelCallbackType, 
}

export type DataChannelCallbackType = (msg:any, channel:DataChannel) => void
