
import * as hegduino from './hegduino/index'
import * as freeeeg from './freeeeg/index'
import * as muse from './muse/index'
import * as webgazer from './webgazer/index'
// import * as bci2000web from './bci2000web/index'
import * as remote from '../../common/source.device'
import { DeviceConfig } from '../types/Devices.types'

// let audioDevices:string[] = [], videoDevices:string[] = [];
// navigator.mediaDevices.enumerateDevices().then(mediaDevices => {
//     let audioIns = mediaDevices.filter(d => d.kind === 'audioinput')
//     let videoIns = mediaDevices.filter(d => d.kind === 'videoinput')

//     audioDevices.push(...audioIns.map(o => o.label))
//     videoDevices.push(...videoIns.map(o => o.label))
//     console.log(mediaDevices)

//     console.log(audioDevices)
//     console.log(videoDevices)

// })

// Supported Devices
const devices: DeviceConfig[] = [
        // ----------------------------------  WebSocket "Device" ----------------------------------
    //     {
    //         label: 'Video', 
    //         video: true,
    //    },

    //    {
    //     label: 'Audio', 
    //     audio: true,
    //     },

        {
             label: 'Webgazer', 
             device: webgazer.Webgazer,
             onconnect: webgazer.onconnect,
             protocols: ['video']
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
    // ----------------------------------  Device with Auto-Generated Connection Scripts ----------------------------------

    {
        // Generic 
        label: 'HEGduino', 
        ondata: hegduino.ondata,
        onconnect: hegduino.onconnect,

        // Bluetooth
        namePrefix: 'HEG', // NOTE: Required when filtering for multiple BLE devices
        serviceUUID: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
        characteristics: {
            transmit: '6e400003-b5a3-f393-e0a9-e50e24dcca9e',
            receive: '6e400002-b5a3-f393-e0a9-e50e24dcca9e',
        }, 

        // Serial / USB
        usbVendorId: 4292,
        usbProductId: 60000,
        bufferSize: 1000,
        baudRate: 115200,

        protocols: ['bluetooth', 'serial'], 
    },

    {
        // Generic 
        label: 'FreeEEG', 
        oninit: freeeeg.oninit,
        ondata: freeeeg.ondata,

        // Serial
        usbVendorId: 0x10c4,
        usbProductId: 0x0043,
        baudRate: 115200,
        bufferSize: 2000,

        // Additional Metadata
        modes: ['optical', 'ads131', 'freeeeg32_2', 'freeeeg32_19'], // oninit
        protocols: ['serial'], 
    },

    // ---------------------------------- Device with Pre-Built Connection Scripts ----------------------------------

        // NOTE: Excluded from search of multiple Bluetooth devices. Must specify label.
        {
            label: 'Muse', 
            device: muse.device,
            onconnect: muse.onconnect,
            protocols: ['bluetooth'], // must specify to list connection types
            modes: ['default', 'aux']
        },
]

export default devices