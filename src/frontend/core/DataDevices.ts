/* 

The DataDevice interface provides access to connected data hardware like EEGs. 
In essence, it lets you obtain access to any hardware source of data.

Based on https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API

*/

import devices from '../devices/index.js';
import { DataStream } from './DataStream.js';
import Bluetooth from '../devices/Bluetooth.device.js'
import Serial from '../devices/Serial.device.js'
import EventSourceDevice from '../devices/EventSource.device.js'
import {Device} from '../devices/Device.js';
import { DataTrackSupportedConstraints } from './DataTrackSupportedConstraints'
import { DeviceType, DeviceConstraintsType } from '../types/Devices.types.js';
import { DeviceRequestType } from '../types/Core.types.js';
import WebsocketDevice from '../devices/Websocket.device.js';

export class DataDevices extends EventTarget {

    devices: DeviceType[]

    get [Symbol.toStringTag]() { return 'DataDevices' }

    constructor () {
        super()

        this.devices = devices

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

    getSupportedDevices = async () => {
        let media = await navigator.mediaDevices.enumerateDevices()
        return [...media, ...devices]
    }

    getSupportedConstraints = async () => {
        return new DataTrackSupportedConstraints(this)
    }

    startDataStream = async (constraints:DeviceConstraintsType<any>, dataStream=new DataStream() ) =>{

        let device;

        constraints.dataStream = dataStream // Bind DataStream to the device

        // TODO: Stop from being Mutually Exclusive
        if (constraints.device) {

            // Wrap in Device Class
            device = new Device(constraints)
            
        }
        else {

            // Request Device from User
            if (constraints.ble) device = new Bluetooth(constraints)
            else if (constraints.serial)  device = new Serial(constraints)
            else if (constraints.wifi) device = new EventSourceDevice(constraints)
            else if (constraints.serviceUUID) device = new Bluetooth(constraints)
            else if (constraints.usbVendorId)  device = new Serial(constraints)
            // if () device = new USBDevice(constraints)
            else if (constraints.url) {
                if (constraints.wifi) device = new EventSourceDevice(constraints)
                else device = new WebsocketDevice(constraints)
            }
            else device = new Device(constraints)
        }

        await device.connect()

        return dataStream
    }

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
        
        // Add Tracks from Connected DataStreams to Base DataStream
        let connectedDevices = [constraints.eeg, constraints.fnirs, constraints.emg] // TODO: Allow more than one of each stream
        connectedDevices = connectedDevices.filter(d => d instanceof DataStream)

        // Connect Devices through WebSerial, WebUSB, WebBLE, or Event Sources
        if (connectedDevices.length === 0){

            // Boolean Requests
            let request: DeviceRequestType = {}
            if (constraints.eeg) request.eeginput = true
            if (constraints.fnirs) request.fnirsinput = true
            if (constraints.emg) request.emginput = true

            // Format Request
            let keys = Object.keys(request)
            const possibleStreams = devices.filter(d => keys.includes(d.kind))
            const deviceDetails = possibleStreams[0] // only first

            // Start Stream
            const device = await this.startDataStream(deviceDetails, stream)
            if (deviceDetails) connectedDevices.push(device)
        }

        connectedDevices.forEach(o =>  o.getTracks().forEach(stream.addTrack)) // NOTE: DataStreams will not initialize with any tracks. They are added dynamically when data is passed

        // Apply Constraints
        stream.getTracks().forEach((t,) => {
            t.applyConstraints(constraints)
            // let settings = t.getSettings() // TODO: Returns a dictionary currently set values for the constraints
            // console.log(`Track ${i} Settings`,settings)
        })
    
        return stream
    }

}