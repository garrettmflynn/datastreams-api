import { DataStreamTrack } from "../core/DataStreamTrack";
import { DataStream } from "../core/DataStream";
import { CoreDeviceType, DeviceConstraintsType } from "../types/Devices.types";
import {randomUUID} from "../../common/id";


export class Device <T> {

    id: string = randomUUID()
    _ondata: (data:any, name?: string) => (any[] | {[x : string | number]: any}) = (data) => data
    constraints: DeviceConstraintsType<T>
    device: CoreDeviceType<T>
    stream?: DataStream
    encoder: TextEncoder | any
    decoder: TextDecoder | any
    active: boolean = false

    // // Inherited Functions
    // onconnect: (target) =>{}
    // ondisconnect: (target) =>{}}

    constructor(constraints: DeviceConstraintsType<T>){
        this.constraints = constraints
        this.device = (constraints.device) ? new constraints.device(constraints) : this
        this.stream = constraints.stream

        // -------------- Set Default Constraints --------------

        this.init(this.constraints)
    }


    init = (constraints?: Partial<DeviceConstraintsType>) => {

        // Disconnect Active Device
        if (this.active) this.disconnect()
        
        // Assign Constraints
        if (constraints) {

            Object.assign(this.constraints, constraints) // Replace new constraints

            //  Callbacks 
            this.onconnect = this.constraints.onconnect ?? this.onconnect;
            this.ondisconnect = this.constraints.ondisconnect ?? this.ondisconnect;
            if (this.constraints.ondata) this._ondata = this.constraints.ondata

            this.onerror = this.constraints.onerror ?? this.onerror;

            if (this.constraints.encode instanceof Function) this.encode = this.constraints.encode 
            else this.encoder = new TextEncoder();

            if (this.constraints.decode instanceof Function) this.decode = this.constraints.decode 
            else this.decoder = new TextDecoder("utf-8");


            if (this.constraints.oninit instanceof Function) this.oninit = this.constraints.oninit

        }

        // Run Callback
        this.oninit(this)
    }
   
    // Core Methods 
    connect = async () => {
        if (!(this.device instanceof Device) && this.device.connect) await this.device.connect()
        this.active = true
        this._connect()
        this.onconnect(this)
    }        

    disconnect = async () => {
        if (!(this.device instanceof Device) && this.device.disconnect) await this.device.disconnect()
        this.active = false
        this.stream?.tracks.forEach((t:DataStreamTrack | MediaStreamTrack) => (this.stream as DataStream)?.removeTrack(t))
        this._disconnect()
        this.ondisconnect(this)
    }

    _connect = async () => { }
    _disconnect = async () => { }

    send = async (msg:any,from:any):Promise<any> => {this.onsend(msg,from)}

    // Auxilliary Methods
    encode = (msg:any, _:string) => this.encoder.encode(msg)
    decode = (msg:any, _:string) => this.decoder.decode(msg)

    // Events
    oninit = async (target:Device<T> = this) => console.log(`${target.constructor.name} inited!`)
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
            if (this.stream){
                
                const keys = Object.keys(obj)

                keys.forEach((key:(string | number)) => {
                    if (this.stream){

                        let track = this.stream.tracks.get(key) ?? this._createTrack(key)

                        if (track instanceof DataStreamTrack) track.addData((obj as any)[key])
                    }
                })

            }
        }

    }

    private _createTrack = (contentHint?: string | number) => {
        if (this.stream){
            const newTrack = new DataStreamTrack(this)
            if(typeof contentHint === 'string') newTrack.contentHint = contentHint
            return this.stream.addTrack(newTrack)
        } else return undefined
    }

}