# Data Capture and Streams API (Data Streams)
Simple Media Capture and Streams API extension to handle arbitrary data streams acquired through the browser.

## Architecture
The `datastreams-api` package allows developers to specify their own I/O requirements by allowing for custom decoders to be written for a particular application. Independent decoded inputs are organzized as `DataStreamTracks` for standardized consumption.

When the user uses requests native to the Media Capture and Streams API, the `tracks` attribute will be an array of `DataStream` objects populated with `DataStreamTracks` that provide raw data from the selected media device (e.g. audio, video)

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
The official documentations for the `datastreams-api` package can be found at [https://streams.brainsatplay.com](https://datastreams.brainsatplay.com).

## Roadmap
1. Thread serial devices.
2. Rewrite examples to conform to new API syntax
3. Simplify and complete documentation
4. Create eye-tracking demo with WebGazer + blink to click
