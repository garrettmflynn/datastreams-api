
import * as hegduino from './hegduino/index'
import * as freeeeg from './freeeeg/index'
import * as muse from './muse/index'
// import * as bci2000web from './bci2000web/index'
import * as remote from '../../common/source.device'
import { DeviceConstraintsType } from '../types/Devices.types'

// Supported Devices
const devices: DeviceConstraintsType[] = [

    // ----------------------------------  Device with Auto-Generated Connection Scripts ----------------------------------

    {
        // Generic 
        label: 'HEGduino', 
        ondata: hegduino.ondata,
        onconnect: hegduino.onconnect,
        bufferSize: 500,

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
        serialOptions: {
            bufferSize: 1000,
            baudRate: 115200
        },
    },

    {
        // Generic 
        label: 'FreeEEG', 
        oninit: freeeeg.oninit,
        ondata: freeeeg.ondata,

        usbVendorId: 0x10c4,
        usbProductId: 0x0043,
        serial: {
            baudRate: 115200,
            bufferSize: 2000,
        },

        // Additional Metadata
        modes: ['optical', 'ads131', 'freeeeg32_2', 'freeeeg32_19'] // oninit
    },

    // ---------------------------------- Device with Pre-Built Connection Scripts ----------------------------------

        {
            // Generic 
            label: 'Muse', 
            // ondata: muse.ondata,
            device: muse.device,
            onconnect: muse.onconnect,
            protocols: ['bluetooth'], // must specify to list connection types

        },


        // ----------------------------------  WebSocket "Device" ----------------------------------

        {
            // Generic 
            label: 'Remote', 
            ondata: remote.ondata,
    
            // URL
            url: 'http://localhost',

            protocols: ['websocket'], 

        },
]

export default devices