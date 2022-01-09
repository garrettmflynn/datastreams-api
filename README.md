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

### Data Organization
- [ ] Integration with [Brains@Play data structures](https://github.com/brainsatplay/brainsatplay-data)

### WebRTC
- [x] P2P Data Streaming 

### Performance
- [x] Threaded stream transformations

## Documentation 
The official documentations for the `datastreams-api` package can be found at [https://streams.brainsatplay.com](https://datastreams.brainsatplay.com).

## Roadmap
1. Generalize the SerialDevice class with the FreeEEG32 driver. Thread it.
    - Modes
    - Safe connection (e.g. error connection to reconnect)
    - Max buffering
2. Remove device registry from being referenced by default
3. Generalize the documentation generation for any future B@P repositories
4. Rewrite examples to conform to new API syntax
5. Use new build tool to run backend and frontend together. Split their builds...
6. Complete documentation
7. Create eye-tracking demo with WebGazer + blink to click
