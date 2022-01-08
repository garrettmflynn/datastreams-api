---
sidebar_position: 1
---
# Data Capture and Streams API (Data Streams)

This API builds upon concepts previously implemented in the [Media Capture and Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API), [Streams API](https://streams.spec.whatwg.org/) and [InsertableStreams API](https://alvestrand.github.io/mediacapture-transform/), and applies them to the existing BLE / USB / Serial APIs in order to build an API that is: 
- Familiar to existing users
- Able to support the insertion of user-defined components
- Able to support high performance user-specified transformations
- Able to support user-defined component wrapping and replacement

The central idea behind the **Data Capture and Streams API** is to expose components from a sensor stream as a collection of streams (as defined by the [WHATWG Streams API](https://streams.spec.whatwg.org/)). This enables **effective processing of data real-time sensor streams without blocking on the main thread.**

Our hope is that this will create an ecosystem of relevant transformations (**"plugins"**) for a new era of real-time data processing on the browser.