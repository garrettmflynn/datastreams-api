import { DataStreamTrack } from "../core/DataStreamTrack";
import { DataStream } from "../core/DataStream";
import { CoreDeviceType, DeviceConstraintsType } from "../types/Devices.types";
import {randomUUID} from "../../common/id";


export class Device <T> {

    id: string = randomUUID()
    _ondata: (data:any, name?: string) => (any[] | {[x : string | number]: any}) = (data) => data
    constraints: DeviceConstraintsType<T>
    device: CoreDeviceType<T>
    dataStream?: DataStream
    encoder: TextEncoder | any
    decoder: TextDecoder | any

    // // Inherited Functions
    // onconnect: (target) =>{}
    // ondisconnect: (target) =>{}}

    constructor(constraints: DeviceConstraintsType<T>){

        this.constraints = constraints
        this.device = (constraints.device) ? new constraints.device(constraints) : this
        this.dataStream = constraints.dataStream
        
        // Callbacks
        this.onconnect = constraints.onconnect ?? this.onconnect;
        this.ondisconnect = constraints.ondisconnect ?? this.ondisconnect;
        if (constraints.ondata) this._ondata = constraints.ondata

        this.onerror = constraints.onerror ?? this.onerror;

        if (constraints.encode) this.encode = constraints.encode 
        else this.encoder = new TextEncoder();

        if (constraints.decode) this.decode = constraints.decode 
        else this.decoder = new TextDecoder("utf-8");
    }
   
    // Core Methods 
    connect = async () => {
        if (!(this.device instanceof Device) && this.device.connect) await this.device.connect()
        this.onconnect(this)
    }        
    disconnect = async () => {
        if (!(this.device instanceof Device) && this.device.disconnect) await this.device.disconnect()
        this.ondisconnect(this)
    }

    send = async (msg:any,from:any):Promise<any> => {this.onsend(msg,from)}

    // Auxilliary Methods
    encode = (msg:any, _:string) => this.encoder.encode(msg)
    decode = (msg:any, _:string) => this.decoder.decode(msg)

    // Events
    onconnect = async (target:Device<T> = this) => console.log(`${target.constructor.name} connected!`)

    ondisconnect = async (target:Device<T> = this) => console.log(`${target.constructor.name} disconnected!`)

    // ondata = async (data, from) => console.log(`${this.constructor.name}: ${data}`)

    onsend = async (msg?:any, from?:any) => {console.log(`Sent ${msg} from ${from}`)}
    onerror = async (err:Error) => console.log(`${this.constructor.name} Error: ${err}`)

    // --------------- Internal Methods ---------------
    ondata = (data:any, charName?:string) => {

            // Run Data through Decoder Function
            if (this._ondata instanceof Function){
            let obj = this._ondata(data, charName) // returns array
            
            // Add DataStreamTrack for each Data Channel
            if (this.dataStream){
                
                const keys = Object.keys(obj)
                keys.forEach((key:(string | number)) => {
                    if (this.dataStream){

                        let track = this.dataStream.tracks.get(key) ?? this._createTrack(key)

                        if (track instanceof DataStreamTrack) track.addData((obj as any)[key])
                    }
                })

            }
        }

    }

    private _createTrack = (contentHint?: string | number) => {
        if (this.dataStream){
            const track = this.dataStream.addTrack(new DataStreamTrack(this))
            if(typeof contentHint === 'string') track.contentHint = contentHint
            return track
        } else return undefined
    }

}