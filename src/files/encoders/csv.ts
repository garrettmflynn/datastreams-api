import { Encoder } from ".";
import {DataType} from '../../DataRecorder'

export default class CSVEncoder extends Encoder {
    mimeType = 'text/csv'

    constructor () {
        super()
    }

    // Flatten Before Passing to this.process
    transform = (data: DataType['data']) => {

            // Flatten Object
            const flat:{[x:string]: any} = {}
            const flatten = (o:any, keyAccum='') => {
                for (let key in o) {
                    const v = o[key]
                    const newKey = (keyAccum) ? keyAccum + '_' + key : key
                    if (Array.isArray(v) || typeof v !== 'object') flat[newKey] = v // Treat arrays and single values as separable items
                    else flatten(v, newKey)
                }
                return o
            }
            flatten(data)

            // Separete Flat Object into a .csv Text File
            const keys = Object.keys(flat)
            const headers = keys.map(key => `"${key}"`).join(',');

            // Get Max Length
            let maxLength = 0
            keys.forEach(k => maxLength = Math.max(maxLength, flat[k]?.length ?? 1))

            let csv = `${headers}`
            for (let i = 0; i < maxLength; i++){
                csv = csv + `\n${keys.map(key => `${(!Array.isArray(flat[key])) ? ((i === 0) ? `${JSON.stringify(flat[key])}` : "") : (flat[key]?.[i] ? `${JSON.stringify(flat[key][i])}` : "")}`).join(',')}`;
            }

            return csv
    }
}
