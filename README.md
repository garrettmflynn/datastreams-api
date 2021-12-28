# Data Capture and Streams API (Data Streams)
Real-time processing of data streams (e.g. video, audio, and physiological data) supplied by the MediaStreams API, Web Serial / WebUSB APIs, Web Bluetooth API, and EventSource API. 

## Explainer
### Problem to Be Solved
We need an API for processing real-time sensor streams that **allows effective processing of data without blocking on the main thread.**


### Approach
This document builds upon concepts previously implemented in the [Streams API](https://streams.spec.whatwg.org/) and [InsertableStreams API](https://alvestrand.github.io/mediacapture-transform/), and applies them to the existing BLE / USB / Serial APIs in order to build an API that is: 
- Familiar to existing users
- Able to support the insertion of user-defined components
- Able to support high performance user-specified transformations
- Able to support user defined component wrapping and replacement

The central idea behind the **Data Capture and Streams API** is to expose components from a sensor stream as a collection of streams (as defined by the [WHATWG Streams API](https://streams.spec.whatwg.org/)). 

Our hope is that this will create an ecosystem of relevant transformations (**"plugins"**) for a new era of real-time data processing on the browser.

### Use Cases
The first use case to bbe supported bby the API is the processing of fNIRS data from Joshua Brewster's [HEGduino](https://github.com/moothyknight/HEG_ESP32_Delobotomizer). However, the same approach can be used in the future for use cases such as:
- Brain-computer interfaces
- Alternative control systems for web browsing

## API Patterns
Streams and more...


## Code Examples
The API is not yet defined in a specification. 

Examples below highlight some typical usages.

### Applying Transformations to DataStreams
This API supports asynchronous transformation of data streams on WebWorker threads, remote servers, or compatible hardware devices. Transformations are applied separately to each DataStreamTrack.

``` javascript
 navigator.DataDevices.getUserStream({eeg:true})
 .thread({function: 'fft'}) // Thread calculation on a WebWorker
//  .offload({function: 'fft'}) // Offload calculation to a remote server
//  .embed({function: 'fft'}) // Embed calculation on a hardware device
 .subscribe(() => console.log)
 
 ```
### Streaming over WebRTC
This API allows for peer-to-peer streaming of MediaStreams and DataStreams over WebRTC.

``` javascript
// Raw Stream Handling
 navigator.DataDevices.getUserStream({video:true, audio: true}).stream(callback)

 // Automated Stream Management
import * as datastreams from './src/index.js'
let streamContext = new datastreams.StreamContext({server: 'http://localhost'})
streamContext.streamer.joinRoom()
```


## The Long Game
In the future, it'd be great to integrate the following features:
1. WebGPU: https://gpuweb.github.io/gpuweb/explainer