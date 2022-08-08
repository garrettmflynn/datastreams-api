# Data Capture and Streams API
A unified data acquisition API for the browser

> **TL;DR:** The Data Capture and Streams API (`datastreams-api`) is a simple extension of the Media Capture and Streams API to handle arbitrary data streams acquired through the browser.

## Introduction
The latest web browsers have a wide variety of APIs for acquiring real-time data, including `navigator.serial`, `navigator.bluetooth`, and `WebSocket`. This is a proposal for `navigator.devices`, a global `Object` that acts as a top-level namespace (similar to [`navigator.mediaDevices`](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API)) that brings a unified data acquisition API to the ECMAScript language.

### Implementation
The **Data Capture and Streams API** (`datastreams-api`) allows developers to specify their own I/O requirements by allowing for custom decoders to be written for a particular application. Independent decoded inputs are organzized as `DataStreamTracks` for standardized consumption.

When the user uses requests native to the Media Capture and Streams API, the `tracks` attribute will be an array of `DataStream` objects populated with `DataStreamTracks` that provide raw data from the selected media device (e.g. audio, video).

## Documentation 
Official documentations for the `datastreams-api` package can be found at [https://streams.brainsatplay.com](https://streams.brainsatplay.com).

##  Devices
| Device               | Status                                                       | Description                                             |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| [device]         | [![device-status]][device] | A template device.
| [ganglion]         | [![ganglion-status]][ganglion] | A driver for the OpenBCI Ganglion.
| [hegduino]         | [![hegduino-status]][hegduino] | A driver for the HEGAlpha HEGduino.
| [muse]         | [![muse-status]][muse] | A driver for the InteraXon Muse 2 and Muse S.
| [blueberry]         | [![blueberry-status]][blueberry] | A driver for the Blueberry.
| [polar]         | [![polar-status]][device] | A driver for the Polar Strap.
| [teensy]         | [![teensy-status]][teensy] | A driver for the Arduino Teensy.

<!-- plugin -->
[plugin]: https://github.com/brainsatplay/plugin
[plugin-status]: https://img.shields.io/npm/v/@brainsatplay/plugin

[device]: https://github.com/brainsatplay/device
[device-status]: https://img.shields.io/npm/v/@brainsatplay/device

[ganglion]: https://github.com/garrettmflynn/ganglion
[ganglion-status]: https://img.shields.io/npm/v/@brainsatplay/ganglion

[hegduino]: https://github.com/garrettmflynn/hegduino
[hegduino-status]: https://img.shields.io/npm/v/@brainsatplay/hegduino

[muse]: https://github.com/garrettmflynn/muse
[muse-status]: https://img.shields.io/npm/v/@brainsatplay/muse

[teensy]: https://github.com/garrettmflynn/teensy
[teensy-status]: https://img.shields.io/npm/v/@brainsatplay/teensy

[blueberry]: https://github.com/garrettmflynn/blueberry
[blueberry-status]: https://img.shields.io/npm/v/@brainsatplay/blueberry

[polar]: https://github.com/garrettmflynn/polar
[polar-status]: https://img.shields.io/npm/v/@brainsatplay/polar