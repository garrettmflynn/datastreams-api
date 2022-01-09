
import * as hegduino from './hegduino/index'
import * as freeeeg from './freeeeg/index'
import * as muse from './muse/index'
import * as bci2000web from './bci2000web/index'
import { DeviceConstraintsType } from '../types/Devices.types'

// Supported Devices
const devices: DeviceConstraintsType[] = [

    // ----------------------------------  Device with Auto-Generated Connection Scripts ----------------------------------

    {
        // Generic 
        label: 'HEGduino', 
        ondata: hegduino.ondata,
        kind: 'datainput',

        // Bluetooth
        namePrefix: 'HEG',
        serviceUUID: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
        characteristics: {
            transmit: '6e400003-b5a3-f393-e0a9-e50e24dcca9e',
            receive: '6e400002-b5a3-f393-e0a9-e50e24dcca9e',
        }, 

        // Serial / USB
        usbVendorId: 4292,
        usbProductId: 60000,

    },

    {
        // Generic 
        label: 'FreeEEG', 
        ondata: freeeeg.ondata,
        kind: 'datainput',

        usbVendorId: 0x10c4,
        usbProductId: 0x0043,
    },

    // ---------------------------------- Device with Pre-Built Connection Scripts ----------------------------------

        {
            // Generic 
            label: 'Muse', 
            // ondata: muse.ondata,
            kind: 'datainput',
            device: muse.device,
            onconnect: muse.onconnect,
            protocols: ['bluetooth'], // must specify to list connection types

        },


        // ----------------------------------  WebSocket "Device" ----------------------------------

        {
            // Generic 
            label: 'Websocket', 
            ondata: bci2000web.ondata,
            kind: 'datainput',
    
            // URL
            url: 'https://localhost',

            protocols: ['websocket'], 

        },
]

export default devices