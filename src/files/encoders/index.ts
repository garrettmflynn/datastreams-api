import {DataType, MimeTypes} from '../../DataRecorder'

export type FilterType = string[]
export type EncoderOptions = {
    filter?: FilterType // Filter for specific information
    mimeType?: MimeTypes,
}


export class Encoder {

    mimeType: MimeTypes = 'application/json'

    constructor () {}

    // -------------- Custom Methods --------------
    transform = (data:DataType['data'], _:EncoderOptions) => JSON.stringify(data)

    // -------------- Default Method --------------
    _filter = (data: DataType['data'], options:EncoderOptions) => {
        if (!options.filter) options.filter = []

        let o:{[x:string]:any} = {}

            // Filter Object
            if (options.filter.length > 0){

            options.filter.forEach((str:string) => { 
                let ref:any = o
                let dataRef = data
                const keys = str.split('_')
                keys.forEach((k, i) => {
                    dataRef = dataRef[k]
                    if (i < keys.length -1) {
                        if (!ref[k]) ref[k] = {}
                        ref = ref[k]
                    } else ref[k] = dataRef
                })
            })
        } else o = data
        return o
    }

    encode = (o:DataType['data'], options:EncoderOptions={}):any => {
        return this.transform(this._filter(o, options), options)
    }
}