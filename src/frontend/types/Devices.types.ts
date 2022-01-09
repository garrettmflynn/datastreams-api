import { DataStream } from '../core/DataStream'
import { Device } from '../devices/Device'

// Only needs extension when the device is an externally specified class
export type CoreDeviceType<T=any> = T & {
    constructor?: Function
    connect?: Function,
    disconnect?: Function
}

export type DeviceType<T=any> = CoreDeviceType<T> & {
    label: string;
    kind: string;
    protocols?: string[];
    modes?: string[];
    bufferSize?: number;
    
    ondata?: (data:any, name?: string) => (any[] | {[x : string | number]: any}); // T[]
    encode?: (data:any, name?: string) => any;
    decode?: (data:any, name?: string) => any;
    oninit?: (target: any) => Promise<any>;
    onconnect?: (target: any) => Promise<any>;
    ondisconnect?: (target: any) => Promise<any>;
    onerror?: (error: Error) => Promise<any>;

    // Bluetooth
    namePrefix?: string;
    serviceUUID?: string;
    characteristics?: {
        [x: string]: string
    };

    // USB / Serial
    usbVendorId?: number | string ;
    usbProductId?: number | string;

    // Event Source / Websocket
    url?: string
    
}

export type DeviceConstraintsType<T=any> = DeviceType<T> & {
    stream?: DataStream,
    device?: Device<T> | CoreDeviceType, 

    // ---------------- Force Connection Type (boolean) or Specify Additional Metadata (object) ----------------
    // BLE
    // bluetooth?: boolean,

    // USB / Serial
    serialOptions?: Partial<SerialOptions>,

    // Wifi
    // wifi?: boolean,

    // WebSocket
    // websocket?: boolean,

    // ---------------- Standardized Initialization Parameters ----------------
    mode?: string;
    protocol?: string | string[];

}