import { Device } from 'src/devices/Device'

let looping = false

// Generic 

export const label = 'Dummy Source'
export const kind = 'datainput'

export const ondata = (decoded:string)=> {
    let channelData = decoded.split(',').map(str => Number.parseFloat(str)) // Organize Decoder Output into a Float Array
    return channelData // Pass Array to DataTracks
}

export const onconnect = async (device: Device<any>) => {

    // Create synthetic data stream
    let freqs = [1,5,10]
    looping = true
    let animate = () => {

        if (looping){
            let channels:number[] = []
            freqs.forEach(f => {
                channels.push(Math.sin((2 * f * Math.PI) * Date.now() / 1000))
            })
            let encoded = channels.join(',') // simulate encoding
            device.ondata(encoded)

            setTimeout(animate, 1000/60)
        }

    }

    animate()
    return true
}

export const ondisconnect = async () => looping = false