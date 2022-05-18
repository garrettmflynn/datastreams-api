/**
 * The `datastreams` module is the frontend module of the Data Capture and Streams API.
 * @packageDocumentation
 * @module datastreams
 */

// // Frontend
// /**
//  * The `datastreams.core` module contains a mirror of the Media Capture and Streams API along with some WebRTC and data pipeline helpers.
//  * @packageDocumentation
//  * @module datastreams.core
//  */

export * from './DataChannel'
export * from './DataDeviceInfo'
export * from './DataDevices'
export * from './DataPipeline'
export * from './DataStream'
export * from './DataStreamConstraints'
export * from './DataStreamTrack'
export * from './DataTrackCapabilities'
export * from './DataTrackConstraints'
export * from './DataTrackSettings'
export * from './DataTrackSupportedConstraints'
export * from './DataRecorder'

// import * as core from "./core";
// export default core
// import * as core from "./core";
// import * as devices from "./devices";
// import * as pipes from "./pipes";
// import * as transforms from "./transforms";


// export {
//     core,
//     devices,
//     pipes,
//     transforms
// }