export type DeviceType = {
    label: string;
    kind: string;
    ondata?:<T=any> (data:any, name?: string) => T[];
    namePrefix?: string;

    // Bluetooth
    serviceUUID?: string;
    characteristics?: {
        transmit: string;
        receive: string;
    };
    fileCharacteristicUuid?: string;

    // USB / Serial
    usbVendorId?: number | string ;
    usbProductId?: number | string;

    // Wifi
    url?: string
}