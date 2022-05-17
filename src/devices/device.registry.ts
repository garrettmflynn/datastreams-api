
import * as freeeeg from './freeeeg/index'

import * as remote from '../common/source.device'
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

        // ----------------------------------  WebSocket "Device" ----------------------------------

        {
            // Generic 
            label: 'Remote', 
            ondata: remote.ondata,
    
            // URL
            url: 'http://localhost',

            protocols: ['websocket'], 

        },
    // ----------------------------------  Device with Auto-Generated Connection Scripts ---------------------------------

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
]

export default devices