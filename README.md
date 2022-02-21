# Data Capture and Streams API (Data Streams)
Simple Media Capture and Streams API extension to handle arbitrary data streams acquired through the browser.


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
The first use case to bbe supported by the API is the processing of fNIRS data from Joshua Brewster's [HEGduino](https://github.com/moothyknight/HEG_ESP32_Delobotomizer). However, the same approach can be used in the future for use cases such as:
- Brain-computer interfaces
- Alternative control systems for web browsing

## API Patterns
The `datastreams-api` package allows developers to specify their own I/O requirements by allowing for custom decoders to be written for a particular application. Independent decoded inputs are organzized as `DataStreamTracks` for standardized consumption.

When the user uses requests native to the Media Capture and Streams API, the `tracks` attribute will be an array of `DataStream` objects populated with `DataStreamTracks` that provide raw data from the selected media device (e.g. audio, video).

## Code Examples
The API is not yet defined in a specification. 

Examples below highlight some typical usages.

*Coming soon...*

## Features
### Configuration
- [x] Condition device properties (e.g. sampling rate, max buffer size, etc.) with oninit() callback

### Data Acquisition
- [x] Web Serial API
- [x] Web Bluetooth API
- [x] EventSource API
- [x] WebSockets API
- [ ] Web USB

### Data Organization
- [ ] Integration with [Brains@Play data structures](https://github.com/brainsatplay/brainsatplay-data)

### WebRTC
- [x] P2P Data Streaming 

### Performance
- [x] Threaded stream transformations

## Documentation 
The official documentations for the `datastreams-api` package can be found at [https://streams.brainsatplay.com](https://streams.brainsatplay.com).
