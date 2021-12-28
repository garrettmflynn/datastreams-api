import { DataStreamTrack } from "./DataStreamTrack"

// Data Channels Behave Just Like Tracks
export class DataChannel extends DataStreamTrack{

    id: string = ''
    label: string = ''
    parent: DataChannel

    constructor(parent: DataChannel){
        super()
        this.id = parent.id
        this.label = parent.label
        this.parent = parent 
    }


    send = (data:any):void => this.parent.send(data)
    sendMessage = () => {}
}