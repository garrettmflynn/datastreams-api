import { DataTrackConstraints } from "./DataTrackConstraints"

export class DataStreamConstraints {

    audio: boolean | DataTrackConstraints = false
    video: boolean | DataTrackConstraints = false
    peerIdentity: null | string = null

    constructor() {

    }
}