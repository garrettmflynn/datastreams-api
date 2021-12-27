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
    
    ondata?:(data:any, name?: string) => any[]; // T[]
    encode?: (data:any, name?: string) => any;
    decode?: (data:any, name?: string) => any;
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
    dataStream?: DataStream,
    device?: Device<T> | any, // TODO: Should specify the requirements for external device classes

    // BLE
    ble?: boolean,

    // USB / Serial
    serial?: boolean,

    // WiFi
    wifi?: boolean,
}