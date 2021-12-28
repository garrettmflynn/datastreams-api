
import * as hegduino from './hegduino/index.js'
import * as muse from './muse/index.js'
import * as bci2000web from './bci2000web/index.js'

// Supported Devices
export const devices = [

    // ----------------------------------  Device with Auto-Generated Connection Scripts ----------------------------------

    {
        // Generic 
        label: 'HEGduino', 
        ondata: hegduino.ondata,
        kind: 'fnirsinput',

        // Bluetooth
        namePrefix: 'HEG',
        serviceUUID: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
        characteristics: {
            transmit: '6e400003-b5a3-f393-e0a9-e50e24dcca9e',
            receive: '6e400002-b5a3-f393-e0a9-e50e24dcca9e',
        }, 
        fileCharacteristicUuid: '6E400006-B5A3-F393-E0A9-E50E24DCCA9E',

        // Serial / USB
        usbVendorId: 4292,
        usbProductId: 60000,
    },

    // ---------------------------------- Device with Pre-Built Connection Scripts ----------------------------------

        {
            // Generic 
            label: 'Muse', 
            // ondata: muse.ondata,
            kind: 'eeginput',
            device: muse.device,
            onconnect: muse.onconnect,
        },


        // ----------------------------------  WebSocket "Device" ----------------------------------

        {
            // Generic 
            label: 'Websocket', 
            ondata: bci2000web.ondata,
            kind: 'eegdata',
    
            // URL
            url: 'https://localhost'
        },
]