# Data Capture and Streams API (Data Streams)
Simple Media Capture and Streams API extension to handle arbitrary data streams acquired through the browser.

## Architecture
The `datastreams-api` package allows developers to specify their own I/O requirements by allowing for custom decoders to be written for a particular application. Independent decoded inputs are organzized as `DataStreamTracks` for standardized consumption.

## Features
### Data Acquisition
- [x] Web Serial API
- [x] Web Bluetooth API
- [x] EventSource API
- [x] WebSockets API
- [ ] Web USB

### WebRTC
- [x] P2P Data Streaming 

### Performance
- [x] Threaded stream transformations

## Documentation 
The official documentations for the `datastreams-api` package can be found at [https://streams.brainsatplay.com](https://datastreams.brainsatplay.com).

## Roadmap
1. Generalize the SerialDevice class with the FreeEEG32 driver. Thread it.
2. Generalize the documentation generation for any future B@P repositories
3. Rewrite examples to conform to new API syntax
4. Use new build tool to run backend and frontend together
5. Complete documentation
6. Create eye-tracking demo with WebGazer + blink to click
