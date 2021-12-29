import { DataStreamTrack } from "./DataStreamTrack"
import { randomUUID } from '../../common/id'

// Data Channels Behave Just Like Tracks
export class DataChannel extends DataStreamTrack{

    id: string = ''
    label: string = ''
    parent: RTCDataChannel

    constructor(parent: RTCDataChannel){
        super()
        this.id = parent.id?.toString() ?? randomUUID()
        this.label = parent.label
        this.parent = parent 
    }


    send = (data:any):void => this.parent.send(data)
    sendMessage = (_:any):any => {}
}