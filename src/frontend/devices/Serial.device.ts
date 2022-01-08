// webSerial utils developed by Diego Schmaedech (MIT License) for chrome. 
// Modified/Generalized and updated for web Serial by Joshua Brewster (MIT License) 
// Modified and updated for device filtering by Garrett Flynn (AGPL License)
import { Device } from './Device'
import { DeviceConstraintsType } from '../types/Devices.types'


export class SerialDevice<T=any> extends Device<T> {

    displayPorts: any[] = []
    encodedBuffer: string = ""
    connected: boolean = false
    recordData: boolean = false
    recorded: any[] = []
    port: any = null
    decoder: TextDecoder = new TextDecoder()
    subscribed: boolean = false
    readable: ReadableStream | null = null
    writer: WritableStream | null = null
    monitoring: boolean = false
    newSamples: number = 0
    monitorSamples: number = 10000 //Max 10000 samples visible in stream monitor by default
    monitorData: any[] = []
    monitorIdx: number = 0

    constructor(constraints: DeviceConstraintsType) {

        super(constraints)

        if (navigator.serial) this.decoder = new TextDecoder();
        else {
            console.log("ERROR: Cannot locate navigator.serial. Enable #experimental-web-platform-features in chrome://flags");
            alert("Serial support not found. Enable #experimental-web-platform-features in chrome://flags or use a chrome extension")
        }
    }

    // ---------------------- CORE ----------------------

    // Supports one usbVendorId and usbProductId filter
    connect = async () => {

        let {usbVendorId, usbProductId} = this.constraints;

        var re = /[0-9A-Fa-f]{6}/g;

        // Convert to Hexadecimal (assume strings are accurate)
        // TODO: TypeScript doesn't like when passing strings as a filter. Do the opposite.
        if (!!usbVendorId && typeof usbVendorId !== 'string' && !re.test(usbVendorId + '')) usbVendorId = `0x${usbVendorId.toString(16)}` // test if this works
        if (!!usbProductId && typeof usbProductId !== 'string' && !re.test(usbProductId + '')) usbProductId = `0x${usbProductId.toString(16)}` // test if this works
        // if (typeof usbProductId === 'string' || typeof usbVendorId === 'string') throw new Error('WTF why is this a string?')
        
        const filters = [
            { 
                usbVendorId, 
                usbProductId
            } as any
        ];

        
        this.port = await navigator.serial.requestPort({ filters }).then(this.onPortSelected)
    }

    send = async (msg: string) => {

        msg+="\n";
        var encodedString = unescape(encodeURIComponent(msg));
        var bytes = new Uint8Array(encodedString.length);
        for (var i = 0; i < encodedString.length; ++i) bytes[i] = encodedString.charCodeAt(i);
        
        if (navigator.serial) {
            if(this.port.writable){
                const writer = this.port.writable.getWriter();
                await writer.write(bytes.buffer);
                writer.releaseLock();
            }
        }
    }

    // ---------------------- INTERNAL UTILITIES ----------------------

    subscribe = async (port: SerialPort = this.port) => {
		if (port.readable && this.subscribed === true) {
			this.readable = port.readable // TODO: Readable data handled externally

            // Internal Management of the Stream
            console.error('Managing the readable stream internally')
            let transform = async (value:any) => {
                // console.log('streaming')
                this.onReceive(value);         
                return value
            }

            const transformer = new TransformStream({transform})
            this.readable
            .pipeThrough(transformer)
            .pipeTo(new WritableStream({}))
            .then(() => console.log("All data successfully written!"))
            .catch(e => this.handleError(e));

            return true;
		} else return false;
	}

    handleError = async (error: Error) => {
        console.log(error);// TODO: Handle non-fatal read error.
                    if(error.message.includes('framing') || error.message.includes('overflow') || error.message.includes('overrun') || error.message.includes('Overflow') || error.message.includes('break')) {
                        this.subscribed = false;
                        setTimeout(async ()=>{
                            if (this.readable) {
                                await this.readable.cancel();
                                this.readable = null;
                            }
                            this.subscribed = true; 
                            this.subscribe(this.port);
                            //if that fails then close port and reopen it
                        },30); //try to resubscribe 
                    } else if (error.message.includes('parity') || error.message.includes('Parity')) {
                        if(this.port){
                            this.subscribed = false;
                            setTimeout(async () => {
                                if (this.readable) {
                                    await this.readable.cancel();
                                    this.readable = null;
                                }
                                await this.port.close();
                                //this.port = null;
                                this.connected = false;
                                setTimeout(()=>{this.onPortSelected(this.port)},100); //close the port and reopen
                            }, 50);
                        }
                    }
                     else {
                        await this.closePort();	
                    }
                }

    onPortSelected = async (port: SerialPort) => {

        // Set in Class
        this.port = port

        // Add Disconnect Callback
        navigator.serial.addEventListener("disconnect",this.closePort)        

        // Open the Port
        try {await port.open({ baudRate: 115200, bufferSize: 1000 }); }
        catch (err) { await port.open({ baudRate: 115200, bufferSize: 1000 }); }
        this.onconnect(this);
        this.connected = true;
        this.subscribed = true;

        // Subscribe to Port Data
        await this.subscribe(port);
    }

    onReceive = (input: ArrayBufferView | ArrayBuffer | undefined) => {
        this.encodedBuffer += this.decoder.decode(input);
        var index;
        while ((index = this.encodedBuffer.indexOf('\n')) >= 0) {
            var line = this.encodedBuffer.substr(0, index + 1);
            if(this.recordData == true) {
                this.recorded.push(line);
            }
            if(this.monitoring = true){
                this.newSamples++;
                this.monitorData.push(line);
            }
            this.ondata(line);
            this.encodedBuffer = this.encodedBuffer.substr(index + 1);
        }
    }

	closePort = async (port=this.port) =>  {
		if(this.port){
			this.subscribed = false;
			setTimeout(async () => {
                try{
                    if (this.readable) {
                        await this.readable.cancel();
                        this.readable = null;
                    }
                    await port.close();
                    //this.port = null;
                    this.connected = false;
                    this.ondisconnect(this);
                } catch (err) {console.error(err);}
			}, 50);
		}
	}
}

