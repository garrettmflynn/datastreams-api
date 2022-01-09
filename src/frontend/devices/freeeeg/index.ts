import { boyerMoore, bytesToInt16, bytesToInt24 } from "./utils"

// const mode = '512'; // Start byte value
const startByte = 160; // Start byte value
const stopByte = 192; // Stop byte value
const globalByteLength = 105; //expected length of 1 line of data
const adcLength = 99; //expected adc channel output length, the last 6 bytes are the accelerometer
const searchString = new Uint8Array([stopByte,startByte]); //Byte search string
// const readRate = 16.666667; //Throttle EEG read speed. (1.953ms/sample min @103 bytes/line)
// const readBufferSize = 2000; //Serial read buffer size, increase for slower read speeds (~1030bytes every 20ms) to keep up with the stream (or it will crash)

// const sps = (mode === '250') ? 250 : 512 //sample rate
const sps =  512 //sample rate

const updateMs = 1000/sps; //even spacing
const maxBufferedSamples = sps*60*2; //max samples in buffer this.sps*60*nMinutes = max minutes of data

let count = 0
const ms: (number)[] = []

export const ondata = (buffer: Uint8Array) => { //returns true if successful, returns false if not

    var needle = searchString
    var haystack = buffer;
    const {search, byteLength} = boyerMoore(needle);
    var indices = [];
    // let newLines = 0;

    // Create New Data Object Every Time
    const data: {[x : string]: any} = { //Data object to keep our head from exploding. Get current data with e.g. data.A0[count-1]
        'A0': [],'A1': [],'A2': [],'A3': [],'A4': [],'A5': [],'A6': [],'A7': [], //ADC 0
        'A8': [],'A9': [],'A10': [],'A11': [],'A12': [],'A13': [],'A14': [],'A15': [], //ADC 1
        'A16': [],'A17': [],'A18': [],'A19': [],'A20': [],'A21': [],'A22': [],'A23': [], //ADC 2
        'A24': [],'A25': [],'A26': [],'A27': [],'A28': [],'A29': [],'A30': [],'A31': [], //ADC 3
        'Ax': [], 'Ay': [], 'Az': [], 'Gx': [], 'Gy': [], 'Gz': []  //Peripheral data (accelerometer, gyroscope)
    };

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
                    var channel = "A"+(i-3)/3;
                    data[channel]=bytesToInt24(line[i],line[i+1],line[i+2]);
                }

                data["Ax"]=bytesToInt16(line[99],line[100]);
                data["Ay"]=bytesToInt16(line[101],line[102]);
                data["Az"]=bytesToInt16(line[103],line[104]);
            }
            
        }
    }

    return data;
}
