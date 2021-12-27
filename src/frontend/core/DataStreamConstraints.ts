import { DataTrackConstraints } from "./DataTrackConstraints"

export default class DataStreamConstraints {

    audio: boolean | DataTrackConstraints = false
    video: boolean | DataTrackConstraints = false
    peerIdentity: null | string = null

    constructor() {

    }
}