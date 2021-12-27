import { DataStreamTrack } from "../core/DataStreamTrack.js";
import { DataStream } from "../core/DataStream.js";

export type deviceConstraints = {
    dataStream: null | DataStream,
    device: null,


    // BLE
    ble: boolean | null,
    serviceUUID: string | null,
    characteristics : any[]

    // USB / Serial
    serial: boolean | null,
    usbVendorId: string | null,
    usbProductId: string | null,

    // WiFi
    wifi: boolean | null,
    url: string | null,
}

export class Device {

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

    constructor(constraints){

        this.constraints = constraints

        this.device = (constraints.device) ? new constraints.device(constraints) : this

        this.dataStream = constraints.dataStream
        
        // Callbacks
        // console.log(constraints)
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

    ondata = (data) => {this._ondata(data)}

    // --------------- Internal Methods ---------------
    _ondata(data){

        this.datacallbacks.forEach(f => {

            // Run Data through Decoder Function
            let arr = f(data) // returns array
            
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