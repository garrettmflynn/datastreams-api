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
All devices compatible with the `datastreams-api` can be found at our [devices](https://github.com/brainsatplay/devices) repository.