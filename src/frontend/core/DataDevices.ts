/* 

The DataDevice interface provides access to connected data hardware like EEGs. 
In essence, it lets you obtain access to any hardware source of data.

Based on https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API

*/

import { DataStream } from './DataStream';
import { Bluetooth as BluetoothDevice } from '../devices/Bluetooth.device'
import { SerialDevice } from '../devices/Serial.device'
// import {EventSourceDevice} from '../devices/EventSource.device'
import {Device} from '../devices/Device';
import { DataTrackSupportedConstraints } from './DataTrackSupportedConstraints'
import { DeviceType, DeviceConstraintsType, CoreDeviceType } from '../types/Devices.types';
import {WebSocketDevice} from '../devices/WebSocket.device';
import { DataDeviceInfo } from '.';


/**
 * The DataDevices interface provides access to data sources like webcams, microphones, and BLE / USB devices. 
 * ```typescript
 * import { DataDevices } from "datastreams-api";
 *
 * const dataDevices = new DataDevices();
 * ```
 */

export class DataDevices extends EventTarget {

    devices: DeviceType[] = []

    get [Symbol.toStringTag]() { return 'DataDevices' }

    constructor () {
        super()

        /* -------- Events --------
            devicechange (to implement): Fired when a biosensing input or output device is attached to or removed from the user's computer.

            this.addEventListener('devicechange', () => {
                console.error('test')
            })
        */
    }

    // // trigger devicechange event
    // _devicechanged = () => {
    //     this.dispatchEvent(new Event('devicechange'))
    // }

    load = (devices: DeviceConstraintsType<any> | DeviceConstraintsType<any>[]) => {
        if (Array.isArray(devices)) this.devices.push(...devices)
        else if (!!devices) this.devices.push(devices)
    }

    enumerateDevices = async () => {
         
        // Get Previously Connected Devices from navigator.usb.requestDevice({filters:[]})
       let usb = await navigator.usb.getDevices()

       // Get Previously Connected Devices from navigator.serial.requestDevice({filters:[]})
       let serial = await navigator.serial.getPorts()

        // Get Previously Connected Devices from navigator.bluetooth.requestDevice({acceptAllDevices: true})
        let bluetooth: any[] = []; //await navigator.bluetooth.getDevices()

        let media = await navigator.mediaDevices.enumerateDevices()
        
        return [...media, ...serial, ...usb, ...bluetooth]
    }

    getSupportedDevices = async (filter?: 'data' | 'media' ) => {
        let media: MediaDeviceInfo[] = []
        if (!filter || filter === 'media'){
            media = await navigator.mediaDevices.enumerateDevices()
        }

        return [...media, ...this.devices]
    }

    getDeviceInfo = (constraints: DeviceConstraintsType) => DataDeviceInfo(constraints)

    getSupportedConstraints = async () => {
        return new DataTrackSupportedConstraints(this)
    }

    // Connect Devices through WebSerial, WebUSB, WebBLE, or Event Sources
    getDevice = (constraints:DeviceConstraintsType<any>) => {

        if (constraints.bluetooth) return new BluetoothDevice(constraints)
        else if (constraints.serial)  return new SerialDevice(constraints)
        // else if (constraints.wifi) return new EventSourceDevice(constraints)
        else if (constraints.websocket) return new WebSocketDevice(constraints)
        else return undefined

    }

    startDataStream = async (constraints:DeviceConstraintsType<any>, dataStream=new DataStream() ) =>{

        let device;


        constraints.dataStream = dataStream // Bind DataStream to the device

        const copy = Object.assign({}, constraints) // Copy

        if (copy.device) {

            // Wrap in Device Class
            device = new Device(copy)
            
        }
        else {

            // Option #1: Get device from raw constraints
            device = this.getDevice(copy)

            // Option #2: Infer preferred connection type from device constraints
            if (!device) {

                let info = DataDeviceInfo(constraints)
                info.protocols.forEach(str => copy[str] = true)
                device = this.getDevice(copy)

            }

            // Option #3: Fallback to generic device
            if (!device) return new Device(constraints)

        }

        await device.connect()

        return constraints.dataStream
    }

    // Pass the full constraint object for the device you want to request
    getUserStream = async (constraints: DeviceConstraintsType) => {

        // delete constraints.audio // NOTE: Remove in production

        let mediaStream;
        // Add MediaStream Tracks to DataStream
        if (constraints.video || constraints.audio) mediaStream = await navigator.mediaDevices.getUserMedia(constraints)

        let stream = new DataStream(mediaStream)

        // Note: Not Tested
        if (constraints.screen){
            let displayStream = await navigator.mediaDevices.getDisplayMedia({video: true})
            displayStream.getTracks().forEach(stream.addTrack)
        }
        
        // Start Stream
        const device = await this.startDataStream(constraints, stream)

         device.getTracks().forEach(stream.addTrack) // NOTE: DataStreams will not initialize with any tracks. They are added dynamically when data is passed

        // Apply Constraints
        stream.getTracks().forEach((t,) => {
            t.applyConstraints(constraints)
            // let settings = t.getSettings() // TODO: Returns a dictionary currently set values for the constraints
            // console.log(`Track ${i} Settings`,settings)
        })
    
        return stream
    }

}