import { DataStreamTrack } from "../core/DataStreamTrack.js";
import { DataStream } from "../core/DataStream.js";
import { CoreDeviceType, DeviceConstraintsType } from "../types/Devices.types.js";
import randomUUID from "../utils/id.js";


export class Device <T> {

    id: string = randomUUID()
    datacallbacks: Function[] = []
    constraints: DeviceConstraintsType<T>
    device: CoreDeviceType<T>
    dataStream?: DataStream
    encoder: TextEncoder | any
    decoder: TextDecoder | any

    // // Inherited Functions
    // onconnect: (target) =>{}
    // ondisconnect: (target) =>{}


    set ondata(func){this.datacallbacks.push(func)}
    get ondata(){return this._ondata}

    constructor(constraints: DeviceConstraintsType<T>){

        this.constraints = constraints
        this.device = (constraints.device) ? new constraints.device(constraints) : this
        this.dataStream = constraints.dataStream
        
        // Callbacks
        this.onconnect = constraints.onconnect ?? this.onconnect;
        this.ondisconnect = constraints.ondisconnect ?? this.ondisconnect;
        let ondata = constraints.ondata ?? this.ondata;
        this.datacallbacks.push(ondata)

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
    encode = (msg:any, from:string) => this.encoder.encode(msg, from)
    decode = (msg:any, from:string) => this.decoder.decode(msg, from)

    // Events
    onconnect = async (target:Device<T> = this) => console.log(`${target.constructor.name} connected!`)

    ondisconnect = async (target:Device<T> = this) => console.log(`${target.constructor.name} disconnected!`)

    // ondata = async (data, from) => console.log(`${this.constructor.name}: ${data}`)

    onsend = async (msg?:any, from?:any) => {console.log(`Sent ${msg} from ${from}`)}
    onerror = async (err:Error) => console.log(`${this.constructor.name} Error: ${err}`)

    // --------------- Internal Methods ---------------
    _ondata(data:any, charName?:string){

        this.datacallbacks.forEach(f => {

            // Run Data through Decoder Function
            let arr = f(data, charName) // returns array
            
            // Add DataStreamTrack for each Data Channel
            if (this.dataStream){
                
                let tracks = this.dataStream.getDataTracks()
                arr.forEach((val:any,i:number) => {
                    if (this.dataStream){
                        let track = tracks[i] ?? this.dataStream.addTrack(new DataStreamTrack(this))
                        if (track instanceof DataStreamTrack) track.addData(val)
                    }
                })

            }
        })

        return 
    }

}