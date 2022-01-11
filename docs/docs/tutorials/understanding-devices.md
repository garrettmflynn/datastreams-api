---
sidebar_position: 3
---

# Understanding Devices

## What are Devices?

In the Data Capture and Streams API, the `Device` class has three extensions: `BluetoothDevice`, `SerialDevice`, and `WebsocketDevice`. These are standardized interfaces for handling real-time data acquired from the browser.

Each device has a `connect()` and `disconnect()` function.

Based on the specified constraints passed to the constructor, the device can be initialized with callbacks such as `oninit()`, `onconnect()`, `ondisconnect()`, `ondata()`, and `onerror()`.

```js
// Instantiate a Generic Device
let device = new datastreams.Device({
  oninit: (data) => {console.log('New data!', data)},
  onconnect: (data) => {console.log('New data!', data)},
  ondisconnect: (data) => {console.log('New data!', data)},
  ondata: (data) => {console.log('New data!', data)},
  onerror: (data) => {console.log('New data!', data)}
})
```

## Conclusion
Coming soon...