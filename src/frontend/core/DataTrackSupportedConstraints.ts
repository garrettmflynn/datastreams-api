import { DataDevices } from "./DataDevices"

export class DataTrackSupportedConstraints {

        // All Media Tracks
        deviceId: boolean
        groupId: boolean

        // Audio Tracks
        autoGainControl: boolean
        channelCount: boolean
        echoCancellation: boolean
        latency: boolean
        noiseSuppression: boolean
        sampleRate: boolean
        sampleSize: boolean
        volume: boolean

        // Video Tracks
        aspectRatio: boolean
        facingMode: boolean
        frameRate: boolean
        height: boolean
        width: boolean
        resizeMode: boolean
        
        // Shared Screen Tracks
        cursor: boolean
        displaySurface: boolean
        logicalSurface: boolean

    constructor (stream: DataDevices) {

        console.log('Logic not implemented', stream)

    }
}