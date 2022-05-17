import { Device } from "../Device";
import { boyerMoore, bytesToInt16, bytesToInt24 } from "./utils"

// const mode = '512'; // Start byte value
const startByte = 160; // Start byte value
const stopByte = 192; // Stop byte value
const globalByteLength = 105; //expected length of 1 line of data
const adcLength = 99; //expected adc channel output length, the last 6 bytes are the accelerometer
const searchString = new Uint8Array([stopByte,startByte]); //Byte search string
// const readRate = 16.666667; //Throttle EEG read speed. (1.953ms/sample min @103 bytes/line)
// const readBufferSize = 2000; //Serial read buffer size, increase for slower read speeds (~1030bytes every 20ms) to keep up with the stream (or it will crash)

let updateMs:number, maxBufferedSamples:number

let count = 0
const ms: (number)[] = []

let outputFilter: {[x: number] : string} | null


export const oninit = (device: Device<any>) => { 

    const mode = device.constraints.mode

    device.constraints.samplingRate = 500;


    if(mode.includes("optical")) {
        device.constraints.baudRate = 921600;
    }

    if(mode.includes("ads131")) {
        device.constraints.samplingRate = 250;
    }

    if(mode.includes("freeeeg32_2")) { 
        outputFilter = {
            4: "FP2",
            24: "FP1",
            8: "other",
        }
    }
    else if (mode.includes('freeeeg32_19')) {
        outputFilter = {
            4: "FP2",
            24: "FP1",
            0: "O2",
            1: "T6",
            2: "T4",
            3: "F8",
            5: "F4",
            6: "C4",
            7: "P4",
            25: "F3",
            26: "C3",
            27: "P3",
            28: "O1",
            29: "T5",
            30: "T3",
            31: "F7",
            16: "FZ",
            12: "PZ",
            8: "other"
        };
    }
    else {
        outputFilter = {
            4: "FP2",
            24: "FP1",
            8: "other",
        };
    }

    updateMs = 1000/device.constraints.samplingRate; //even spacing
    device.constraints.bufferSize = maxBufferedSamples = device.constraints.samplingRate*60*2

}

export const ondata = (buffer: Uint8Array) => { //returns true if successful, returns false if not

    var needle = searchString
    var haystack = buffer;
    const {search, byteLength} = boyerMoore(needle);
    var indices = [];
    // let newLines = 0;

    // Create New Data Object Every Time
    const data: {[x : string]: any} = {};

    for (var i = search(haystack); i !== -1; i = search(haystack, i + byteLength)) {
        indices.push(i);
    }
    //console.log(indices);
    if(indices.length >= 2){
        for(let k = 1; k < indices.length; k++) {
            if(indices[k] - indices[k-1] !== globalByteLength) {
                
            } //This is not a valid sequence going by size, drop sequence and return
            else {
                var line = buffer.slice(indices[k-1],indices[k]+1); //Splice out this line to be decoded
                
                // line[0] = stop byte, line[1] = start byte, line[2] = counter, line[3:99] = ADC data 32x3 bytes, line[100-104] = Accelerometer data 3x2 bytes

                //line found, decode.
                if(count < maxBufferedSamples){
                    count++;
                }

                if(count-1 === 0) {ms[count-1]= Date.now();}
                else {
                    ms[count-1]=ms[count-2]+updateMs;
                    
                    if(count >= maxBufferedSamples) {
                        ms.splice(0,5120);
                        // ms.push(new Array(5120).fill(0));
                    }
                }//Assume no dropped samples
            
                for(var i = 3; i < adcLength; i+=3) {
                    const num = (i-3)/3;
                    const decoded = bytesToInt24(line[i],line[i+1],line[i+2]);
                    if (outputFilter == null) data["A"+num]=decoded
                    else data[outputFilter[num]]=decoded

                }

                data["Ax"]=bytesToInt16(line[99],line[100]);
                data["Ay"]=bytesToInt16(line[101],line[102]);
                data["Az"]=bytesToInt16(line[103],line[104]);
            }
            
        }
    }

    return data;
}
