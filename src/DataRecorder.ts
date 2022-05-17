
// Records data to a file

type fileType = 'json' | 'csv' | 'hdf5' | string

type RecorderConfig = {
    type?: fileType
}

export class DataRecorder {

    type: fileType = 'json'

    constructor (config:RecorderConfig={}) {
        if (config.type) this.type = config.type
    }
}