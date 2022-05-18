import { Decoder } from ".";

export default class CSVDecoder extends Decoder {
    mimeType = 'text/csv'

    constructor () {
        super()
    }

    // Flatten Before Passing to this.process
    transform = (data: string) => {

            const rows = data.split('\n').map(str => str.split(','))
            const headers = rows.shift() ?? []

            let o:{[x:string]: any} = {}

            // Parse Data
            rows.forEach((arr) => {
                arr.forEach((v,k) => {
                    const key = eval(headers[k])
                    if (v) {
                        try { v = eval(v) } catch {}
                        if (!o[key]) o[key] = v
                        else if (!Array.isArray(o[key])) o[key] = [o[key], v]
                        else o[key].push(v)
                    } 
                })
            })

            // Organize as an Object
            const o2:{[x:string]: any} = {}
            const keys = Object.keys(o)
            keys.forEach(str => {
                const elements = str.split('_')
                let ref = o2
                elements.forEach((s, i) => {
                    if (i < elements.length - 1) {
                        if (!ref[s]) ref[s] = {}
                        ref = ref[s]
                    } else ref[s] = o[str] // Setting data
                })
            })

            return o2
    }
}
