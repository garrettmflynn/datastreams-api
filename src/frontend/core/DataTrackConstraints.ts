import { DataStreamTrack } from "./DataStreamTrack"

// Constraints which are specified using any or all of max, min, or exact are always treated as mandatory. 
// If any constraint which uses one or more of those can't be met when calling applyConstraints(), the promise will be rejected.

export class DataTrackConstraints {

        deviceId?: string | undefined
        groupId?: string | undefined

        autoGainControl: null = null
        channelCount: null = null
        echoCancellation: null = null
        latency: null = null
        noiseSuppression: null = null
        sampleRate: null = null
        sampleSize: null = null
        volume: null = null

        // Image Tracks
        whiteBalanceMode: null = null
        exposureMode: null = null
        focusMode: null = null
        pointOfInterest: null = null
        exposureCompensation: null = null
        colorTemperature: null = null
        iso: null = null
        brightness: null = null
        contrast: null = null
        saturation: null = null
        sharpness: null = null
        focusDistance: null = null
        zoom: null = null
        torch: null = null

        // Video Tracks
        aspectRatio: null = null
        facingMode: null = null
        frameRate: null = null
        height: null = null
        width: null = null
        resizeMode: null = null
        
        // Shared Screen Tracks
        cursor: string | string[] = ['always', 'motion', 'never'] // can be single string
        displaySurface: string | string[] = ['application', 'browser', 'monitor', 'window'] // can be single string
        logicalSurface: boolean = false


    constructor(track: DataStreamTrack) {
        console.error('TODO: Get Constraints', track) // TODO: Get Constraints
        return this
    }
}