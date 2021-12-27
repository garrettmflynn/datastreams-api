// BluetoothDevice modified from this sparkfun tutorial: https://learn.sparkfun.com/tutorials/esp32-ota-updates-over-ble-from-a-react-web-application/all
// Joshua Brewster and Garrett Flynn, November 2021 (AGPL License)


//See original copyright:
/*************************************************** 
 This is a React WebApp written to Flash an ESP32 via BLE

Written by Andrew England (SparkFun)
BSD license, all text above must be included in any redistribution.
*****************************************************/
import {Device} from "./Device.js"

export default class BluetoothDevice extends Device { //This is formatted for the way the HEG sends/receives information. Other BLE devices will likely need changes to this to be interactive.
    
            // Device-Specific Properties
            namePrefix: string = ''
            serviceUUID: string = ''
            characteristics = {};
    
            // Generic Properties
            device = null;
            server = null;
            service = null;
            transmitCharacteristic = null
    
            otaServiceUuid: string = ''
            fileCharacteristicUuid: string = ''
    
            otaService = null;
            readyFlagCharacteristic = null;
            dataToSend = null;
            updateData = null;
    
            totalSize;
            remaining;
            amountToWrite;
            currentPosition;
    
            currentHardwareVersion: string = "N/A";
            softwareVersion: string = "N/A";
            latestCompatibleSoftware: string = "N/A";
    
            characteristicSize: number = 512; //MTUs //20 byte limit on android   
    
    constructor(constraints) {

        super(constraints)
        this.namePrefix = constraints.namePrefix;
        this.serviceUUID = constraints.serviceUUID;
        let otaServiceUuid = constraints.otaServiceUuid
        let fileCharacteristicUuid = constraints.fileCharacteristicUuid 
        this.otaServiceUuid = (typeof otaServiceUuid === 'string') ? otaServiceUuid.toLowerCase() : otaServiceUuid;
        this.fileCharacteristicUuid = (typeof fileCharacteristicUuid === 'string') ? fileCharacteristicUuid.toLowerCase() : fileCharacteristicUuid;
    }

    // ---------------------- CORE ----------------------

    connect = async () => { //Must be run by button press or user-initiated call
        let serviceUUID = (typeof this.serviceUUID === 'string') ? this.serviceUUID.toLowerCase() : this.serviceUUID
        console.log(serviceUUID)
        
        let filters = []
        if (serviceUUID) filters.push({ services: [serviceUUID] })
        if (this.namePrefix) filters.push({ namePrefix: this.namePrefix })

        await navigator.bluetooth.requestDevice({
            filters
        })
            .then(device => {
                this.device = device;
                return device.gatt.connect(); //Connect to HEG
            })
            .then(server => {
                this.server = server
                return server.getPrimaryService(serviceUUID)
            })
            .then(async service => {

                this.service = service;
                this.otaService = service;
                this.device.addEventListener('gattserverdisconnected', this.ondisconnect);

                for (let name in this.constraints.characteristics){
                    await this.connectCharacteristic(name, this.constraints.characteristics[name])
                }

                this.onconnect(this);

            })
            .catch(err => { console.error(err); this.onerror(err); err = true; });
    }

    disconnect = async () => {
        this.server?.disconnect();
        this.ondisconnect(this);
    };

    send = (msg, charName) => {
        if (this.transmitCharacteristic) return this.transmitCharacteristic.writeValue(this.encode(msg, charName));
    }

    // ---------------------- CALLBACKS ----------------------

    onnotification = (e, charName) => this.ondata(this.decode(e.target.value, charName), charName)

    // ---------------------- INTERNAL UTILITIES ----------------------


    connectCharacteristic = async (name, value) => {
        console.log(name, value)
        if (Array.isArray(value)) await Promise.all(value.map((val, i) => this.connectCharacteristic(`${name}${i}`, val)))
        else {
            value = (typeof value === 'string') ?  value.toLowerCase() : value
            const characteristic = await this.service.getCharacteristic(value);

            this.characteristics[name] = characteristic

            let props = characteristic.properties
            
            // Assign to Write to this Characteristic
            if (props.write || props.writeWithoutResponse){ 
                this.transmitCharacteristic = characteristic
            }

            // Start Notifications
            if (props.notify){
                characteristic.addEventListener('characteristicvaluechanged', (e) => {
                    this.onnotification(e,name)
                })
                return characteristic.startNotifications()
            } 
        }
    }

    /* SendBufferedData()
    * An ISR attached to the same characteristic that it writes to, this function slices data into characteristic sized chunks and sends them to the Server
    */
    SendBufferedData() {
        if (this.remaining > 0) {
            if (this.remaining >= this.characteristicSize) {
                this.amountToWrite = this.characteristicSize
            }
            else {
                this.amountToWrite = this.remaining;
            }

            this.dataToSend = this.updateData.slice(this.currentPosition, this.currentPosition + this.amountToWrite);
            this.currentPosition += this.amountToWrite;
            this.remaining -= this.amountToWrite;
            console.log("remaining: " + this.remaining);

            this.otaService.getCharacteristic(this.fileCharacteristicUuid)
                .then(characteristic => this.RecursiveSend(characteristic, this.dataToSend))
                .then(_ => {
                    let progress = (100 * (this.currentPosition / this.totalSize)).toPrecision(3) + '%';
                    this.onProgress(progress);
                    return;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    onProgress = (progress) => {console.log('Progress:', progress)}

    RecursiveSend(characteristic, data) {
        return characteristic.writeValue(data)
            .catch(error => {
                return this.RecursiveSend(characteristic, data);
            });
    }
}