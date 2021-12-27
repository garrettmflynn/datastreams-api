import { DataStreamTrack } from "./DataStreamTrack"

// Data Channels Behave Just Like Tracks
export default class DataChannel extends DataStreamTrack{

    id: string = ''
    label: string = ''
    parent: DataChannel | null

    constructor(parent: DataChannel){
        super()
        this.id = parent.id
        this.label = parent.label
        this.parent = parent 
    }


    send = (data) => this.parent.send(data)
    sendMessage = () => {}
}