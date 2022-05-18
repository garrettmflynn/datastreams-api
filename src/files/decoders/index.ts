import {MimeTypes} from '../../DataRecorder'

export type FilterType = string[]
export type DecoderOptions = {
    autoplay?: boolean,
    method?: 'readAsText' | 'readAsArrayBuffer' |  'readAsBinaryString' | 'readAsDataURL'
}


export class Decoder {

    mimeType: MimeTypes = 'application/json'
    method: DecoderOptions['method'] = 'readAsText'
    reader = new FileReader();

    constructor () {

    }

    // -------------- Custom Methods --------------
    transform = (result:any, _:DecoderOptions) => {
        return JSON.parse(result)
    }


    // -------------- Default Method --------------
    decode = (blob:Blob, options:DecoderOptions={}):any => {

        if (!options.method) options.method = this.method // Default read method

        return new Promise(resolve => {
            this.reader.onload = () => {
                resolve(this.transform(this.reader.result, options))
            };

            this.reader.readAsText(blob);
        })
    }
}