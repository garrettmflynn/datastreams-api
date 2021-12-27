import { DataStreamTrack } from "../core/DataStreamTrack.js";
import { DataStream } from "../core/DataStream.js";
import { DeviceType } from "../types/General.types.js";
import randomUUID from "../utils/id.js";

export type deviceConstraints = DeviceType & {
    dataStream?: DataStream,
    device?, // TODO: Should specify the requirements for external device classes

    // BLE
    ble?: boolean,

    // USB / Serial
    serial?: boolean,

    // WiFi
    wifi?: boolean,
}

export class Device {

    id: string = randomUUID()
    datacallbacks: Function[] = []
    constraints: deviceConstraints
    device: Device
    dataStream: null | DataStream
    encoder: TextEncoder | any
    decoder: TextDecoder | any

    // // Inherited Functions
    // onconnect: (target) =>{}
    // ondisconnect: (target) =>{}


    set ondata(func){this.datacallbacks.push(func)}
    get ondata(){return this._ondata}

    constructor(constraints: deviceConstraints){

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
        if (this.device !== this) await this.device.connect()
        this.onconnect(this)
    }        
    disconnect = async () => {
        if (this.device !== this) await this.device.disconnect()
        this.ondisconnect(this)
    }
    send = async (arg1, arg2):Promise<any> => {this.onsend()}

    // Auxilliary Methods
    encode = (msg, from) => this.encoder.encode(msg)
    decode = (msg, from) => this.decoder.decode(msg)

    // Events
    onconnect = async (target = this) => console.log(`${target.constructor.name} connected!`)

    ondisconnect = async (target = this) => console.log(`${target.constructor.name} disconnected!`)

    // ondata = async (data, from) => console.log(`${this.constructor.name}: ${data}`)

    onsend = async () => {}
    onerror = async (err) => console.log(`${this.constructor.name} Error: ${err}`)

    // --------------- Internal Methods ---------------
    _ondata(data:any, charName?:string){

        this.datacallbacks.forEach(f => {

            // Run Data through Decoder Function
            let arr = f(data, charName) // returns array
            
            // Add DataStreamTrack for each Data Channel
            let tracks = this.dataStream.getDataTracks()
            arr.forEach((val,i) => {
                let track = tracks[i] ?? this.dataStream.addTrack(new DataStreamTrack(this.device))
                if (track instanceof DataStreamTrack) track.addData(val)
            })
        })

        return 
    }

}