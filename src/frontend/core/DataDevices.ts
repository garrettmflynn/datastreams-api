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
import { DeviceConstraintsType, DeviceConfig } from '../types/Devices.types';
import {WebSocketDevice} from '../devices/WebSocket.device';
import { DataDeviceInfo } from './DataDeviceInfo';


/**
 * The DataDevices interface provides access to data sources like webcams, microphones, and BLE / USB devices. 
 * ```typescript
 * import { DataDevices } from "datastreams-api";
 *
 * const dataDevices = new DataDevices();
 * ```
 */

export class DataDevices extends EventTarget {

    devices: DeviceConfig[] = []

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

    getDeviceInfo = (constraints: DeviceConfig) => DataDeviceInfo(constraints)

    getSupportedConstraints = async () => {
        return new DataTrackSupportedConstraints(this)
    }

    // Specify Device with Protocol, Label, and Mode (or Pass in the Entire Device Configuration). Allows Boolean or Object Specification.
    // Note: Allows selection by the end-user if the query returns more than one device
    getDevice = (constraints:DeviceConfig<any>, fallback=false) => {

        // Match Device Configuration by Constraints
       let filtered = [...this.devices]

       const protocols: string[] = []
       if (constraints.bluetooth) protocols.push('bluetooth')
       if (constraints.usb || constraints.serial) protocols.push('usb', 'serial')
       if (constraints.websocket) protocols.push('websocket')

        // Protocol Match
        if (protocols.length > 0) filtered = filtered.filter(o => {
            if(o['protocols']) return o['protocols'].find((k:string) => protocols.includes(k))
        })

        // Label Match
        const label = (constraints as {[x: string]: any})['label']
        if (label) filtered = filtered.filter(o => label === o.label)

        // Mode Match
        const mode = (constraints as {[x: string]: any})['mode']
        if (mode){
            filtered = filtered.filter(o => {
                if(o['modes']) return o['modes'].includes(mode)
            })
        }
        

        if (filtered.length === 0) filtered.push(constraints) // Load raw constraints
        
        const found = filtered?.[0] // Jump to Fallback if Stream is Specified OR No Filtered Results
        const customDevice = !!filtered?.[0]?.device // Jump to Fallback if Stream is Specified OR No Filtered Results

        if (protocols.length === 0) protocols.push(...found?.protocols ?? [])

        const getGenericDevice = () => {
            return new Device((found) ? filtered.map(o => Object.assign(o, constraints)) : constraints) //Fallback to generic device
        }

        // TODO: Allow users to select from multiple matches
        if (customDevice) return getGenericDevice()
        else {

            // Check Protocol and serviceUUID Presence
            if (found && (protocols.includes('bluetooth') && found?.serviceUUID)) return new BluetoothDevice(filtered.map(o => Object.assign(o, constraints)))
            
            // Check Protocol and usbVendorId / usbProductId Presence
            else if (found && (protocols.includes('usb') || (protocols.includes('serial') && found?.usbVendorId && found?.usbProductId)))  return new SerialDevice(filtered.map(o => Object.assign(o, constraints)))
            else if (found && protocols.includes('websocket')) return new WebSocketDevice(filtered.map(o => Object.assign(o, constraints)))
            else if (fallback) return getGenericDevice()
        }
        return
    }

    startDataStream = async (constraints:DeviceConfig<any> = {}, stream=new DataStream() ) =>{

        let device;


        constraints.stream = stream // Bind DataStream to the device

        const copy = Object.assign({}, constraints) // Copy
        if (copy.device || (constraints.video || constraints.audio || constraints.screen)) {

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

                // Option #3: Fallback to generic device if not found
                device = this.getDevice(copy, true) 
            }
        }

        if (device) await device.connect().then(res => res).catch((e) => { 
            console.warn('Device not connected')
            throw e
        })

        return device
    }

    // Pass minimal constraints (e.g. {bluetooth: true}) OR the full device configuration object
    getUserDevice = async (constraints: DeviceConfig = {}) => {

        // delete constraints.audio

        let mediaStream;

        // 1. Use MediaStreams API
        if (constraints.video || constraints.audio) mediaStream = await navigator.mediaDevices.getUserMedia(constraints)

        let stream = new DataStream(mediaStream)

         // 2. Get Screen through MediaStreams API
        if (constraints.screen){
            let displayStream = await navigator.mediaDevices.getDisplayMedia({video: true})
            displayStream.getTracks().forEach(stream.addTrack)
        }
        
        // 3. Create Device from Contraints and Stream
        const device = await this.startDataStream(constraints, stream)

        // 4. Apply Constraints
        stream.getTracks().forEach((t,) => {
            t.applyConstraints(constraints)
            // let settings = t.getSettings() // TODO: Returns a dictionary currently set values for the constraints
            // console.log(`Track ${i} Settings`,settings)
        })
    
        return device
    }

}