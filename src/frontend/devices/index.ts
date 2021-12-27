
import * as hegduino from './hegduino/index.js'
import * as muse from './muse/index.js'
import { Device } from './Device.js'

// Supported Devices
export default [

     // ---------------------------------- Dummy Device ----------------------------------

     {

        // Generic 
        label: 'Sine', 
        ondata: (decoded:string) => {
            let channelData = decoded.split(',').map(str => Number.parseFloat(str)) // Organize Decoder Output into a Float Array
            return channelData // Pass Array to DataTracks
        },
        onconnect: (device: Device<any>) => {

            // Create synthetic data stream
            let freqs = [1,5,10]
            let animate = () => {

                let channels:number[] = []
                freqs.forEach(f => {
                    channels.push(Math.sin((2 * f * Math.PI) * Date.now() / 1000))
                })
                let encoded = channels.join(',') // simulate encoding
                device.ondata(encoded)

                setTimeout(animate, 1000/60)
            }

            animate()
        },
        kind: 'dummyinput', 
    },

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
]