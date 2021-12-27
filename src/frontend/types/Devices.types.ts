import { DataStream } from '../core/DataStream'
import { Device } from '../devices/Device'

export type CoreDeviceType<T=any> = T & {
    constructor: Function
    connect: () => {},
    disconnect: () => {}
}

export type DeviceType<T=any> = CoreDeviceType<T> & {
    label: string;
    kind: string;
    
    ondata?:<T=any> (data:any, name?: string) => T[];
    encode?:<T=any> (data:any, name?: string) => T;
    decode?:<T=any> (data:any, name?: string) => T;
    onconnect?:<T=any> (target: any) => Promise<T>;
    ondisconnect?:<T=any> (target: any) => Promise<T>;
    onerror?:<T=any> (error: Error) => Promise<T>;

    // Bluetooth
    namePrefix?: string;
    serviceUUID?: string;
    characteristics?: {
        [x: string]: string
    };

    // USB / Serial
    usbVendorId?: number | string ;
    usbProductId?: number | string;

    // Wifi
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