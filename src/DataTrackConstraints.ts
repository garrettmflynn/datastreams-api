import { DataStreamTrack } from "./DataStreamTrack"

// Constraints which are specified using any or all of max, min, or exact are always treated as mandatory. 
// If any constraint which uses one or more of those can't be met when calling applyConstraints(), the promise will be rejected.

export class DataTrackConstraints {

        deviceId?: string | undefined
        groupId?: string | undefined

        autoGainControl: boolean | undefined
        channelCount: number | undefined = undefined
        echoCancellation: boolean  | undefined
        latency: number | undefined = undefined
        noiseSuppression: boolean  | undefined
        sampleRate: number | undefined = undefined
        sampleSize: number | undefined = undefined
        volume: number | undefined = undefined

        // Image Tracks
        whiteBalanceMode: number | undefined = undefined
        exposureMode: number | undefined = undefined
        focusMode: number | undefined = undefined
        pointOfInterest: number | undefined = undefined
        exposureCompensation: number | undefined = undefined
        colorTemperature: number | undefined = undefined
        iso: number | undefined = undefined
        brightness: number | undefined = undefined
        contrast: number | undefined = undefined
        saturation: number | undefined = undefined
        sharpness: number | undefined = undefined
        focusDistance: number | undefined = undefined
        zoom: number | undefined = undefined
        torch: number | undefined = undefined

        // Video Tracks
        aspectRatio: number | undefined = undefined
        facingMode: string  | undefined
        frameRate: number | undefined = undefined
        height: number | undefined = undefined
        width: number | undefined = undefined
        resizeMode: number | undefined = undefined
        
        // Shared Screen Tracks
        cursor: string | string[] = ['always', 'motion', 'never'] // can be single string
        displaySurface: string | string[] = ['application', 'browser', 'monitor', 'window'] // can be single string
        logicalSurface: boolean = false


    constructor(track: DataStreamTrack) {
        console.error('TODO: Get Constraints', track) // TODO: Get Constraints
        return this
    }
}