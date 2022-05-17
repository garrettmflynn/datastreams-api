import { DataTrackConstraints } from './DataTrackConstraints'
import { DataStreamTrack } from './DataStreamTrack'

export class DataTrackSettings extends DataTrackConstraints {

    constructor(track: DataStreamTrack){

        super(track)
        let constraints = track.getConstraints()

        // All Media Tracks
        this.deviceId = constraints.deviceId
        this.groupId = constraints.groupId

        // Audio Tracks
        this.autoGainControl = constraints.autoGainControl
        this.channelCount = constraints.channelCount
        this.echoCancellation = constraints.echoCancellation
        this.latency = constraints.latency
        this.noiseSuppression = constraints.noiseSuppression
        this.sampleRate = constraints.sampleRate
        this.sampleSize = constraints.sampleSize
        this.volume = constraints.volume

        // Video Tracks
        this.aspectRatio = constraints.aspectRatio
        this.facingMode = constraints.facingMode
        this.frameRate = constraints.frameRate
        this.height = constraints.height
        this.width = constraints.width
        this.resizeMode = constraints.resizeMode
        
        // Shared Screen Tracks
        this.cursor = constraints.cursor
        this.displaySurface =  constraints.displaySurface
        this.logicalSurface =  constraints.logicalSurface
    }
}