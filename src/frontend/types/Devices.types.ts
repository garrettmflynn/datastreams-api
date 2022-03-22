import { DataStream } from '../core/DataStream'
import { Device } from '../devices/Device'

// Only needs extension when the device is an externally specified class
export type CoreDeviceType<T=any> = T & {
    constructor?: Function
    connect?: Function,
    disconnect?: Function
}

export type DeviceAttributes = USBDetails & BLEDetails & {

    bufferSize?: number;

     // Event Source / Websocket
     url?: string

}

// Must include DeviceConstraintsType for uniform reconfiguration
export type DeviceConfig<T=any> = DeviceConstraintsType & CoreDeviceType<T> & DeviceAttributes & {
    label: string;
    kind: string;
    protocols?: string[];
    modes?: string[];
    
    ondata?: (data:any, name?: string) => (any[] | {[x : string | number]: any}); // T[]
    encode?: (data:any, name?: string) => any;
    decode?: (data:any, name?: string) => any;
    oninit?: (target: any) => Promise<any>;
    onconnect?: (target: any) => Promise<any>;
    ondisconnect?: (target: any) => Promise<any>;
    onerror?: (error: Error) => Promise<any>;

    // Internal Usage Only
    debug?: boolean;

}

export type USBDetails = Partial<SerialOptions> & {
    usbVendorId?: number | string ;
    usbProductId?: number | string;
}

export type BLEDetails = {
    namePrefix?: string;
    serviceUUID?: string;
    characteristics?: {
        [x: string]: string
    };
}

export type DeviceConstraintsType<T=any> = MediaStreamConstraints & {screen?: boolean} & DeviceAttributes & { // Filter by a subset of device attributes
    stream?: DataStream; // Existing Stream
    device?: Device<T> | CoreDeviceType; // Device Class

    // ---------------- Force Connection Type (boolean) or Specify Additional Metadata (object) ----------------
    
    // BLE
    bluetooth?: boolean | BLEDetails;

    // USB / Serial
    usb?: boolean | USBDetails;
    serial?: boolean | USBDetails;

    // Wifi
    wifi?: boolean | string;

    // WebSocket
    websocket?: boolean | string;

    // ---------------- Standardized Initialization Parameters ----------------
    mode?: string;
    protocol?: string | string[];

}