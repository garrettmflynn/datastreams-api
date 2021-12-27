import {DataDevices} from './frontend/core/DataDevices.js'
import {DataStream} from './frontend/core/DataStream.js'
import {DataStreamTrack} from './frontend/core/DataStreamTrack.js'
import {DataStreamTrackGenerator} from './frontend/core/DataStreamTrackGenerator.js'
import {DataStreamTrackProcessor} from './frontend/core/DataStreamTrackProcessor.js'
import {DataPipeline} from './frontend/core/DataPipeline.js'

// ---------------------------------- API initialization ---------------------------------- 
window.DataStreamTrackGenerator = DataStreamTrackGenerator // proposed external usage
window.DataStreamTrackProcessor = DataStreamTrackProcessor // proposed external usage
navigator.dataDevices = new DataDevices() // proposed external usage


export {

    // Devices
    DataDevices,

    // Stream
    DataStream,

    // Track
    DataStreamTrack,

    // Insertable Stream Format
    DataStreamTrackGenerator,
    DataStreamTrackProcessor,
    DataPipeline
}
