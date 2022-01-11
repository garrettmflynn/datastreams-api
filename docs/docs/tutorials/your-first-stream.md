---
sidebar_position: 2
---

# Your First Stream

## Request the Stream

Create a simple HTML file at `index.html` and link this to JavaScript file at `index.js`:

```html title="examples/hello/index.html"
<html>
  <head>
    <title>Hello Stream!</title>

    <!-- Import the DataStreams Library -->
    <script src="https://cdn.jsdelivr.net/datastreams-api/"></script>

    <!-- Import your JavaScript File -->
    <script src="./hello.js"></script>
  </head>
  <body>
    <p id="readout">N/A</p>
    <button id="connect">Connect to Stream</button>
  </body>
</html>
```

```js title="examples/hello/index.js"
// Instantiate the Device API
let dataDevices = new datastreams.DataDevices()
```

Then use `dataDevices.getUserStream()` to request a device. This must happen on a user-initiated action (e.g. button press)

```js title="examples/hello/index.js" {3-11}
// Instantiate the Device API
let dataDevices = new datastreams.DataDevices()

let connect = document.getElementById('connect')
connect.onclick = () => {

  // Request Dummy Websocket Device from the Brains@Play Server
  dataDevices.getUserStream({ protocol: 'websocket' })
  .then(device => console.log(device, device.stream))
  .catch(console.error)

}
```

You should now be getting a real-time stream from our WebSocket server!


### Stream Types

If you're feeling adventerous, you can also try connecting to other stream types:

1. Bluetooth: `{protocol: 'bluetooth'}`
2. Serial / USB: `{protocol: 'serial'}`
<!-- 3. EventSources: `{protocol: 'wifi', url: 'https://example.com'}` -->
3. WebSocket: `{protocol: 'websocket', url: 'https://example.com'}`

```diff title="examples/hello/index.js"
- dataDevices.getUserStream({ protocol: 'websocket' })
+ dataDevices.getUserStream({ protocol: 'bluetooth' })
  .then(device => console.log(device, device.stream))
  .catch(console.error)
```

### Live Demo

```html live
  <div>
    <p id="readout">N/A</p>
    <button id="connect">Connect to Stream</button>

    <script>
      console.log(datastreams)
      let dataDevices = new datastreams.DataDevices()

      let connect = document.getElementById('connect')
      connect.onclick = () => {

        dataDevices.getUserStream({ protocol: 'websocket' })
        .then(device => console.log(device, device.stream))
        .catch(console.error)

      }
    </script>
  </div>
```

Check the console to see the output of `console.log(device, device.stream)`.

## Visualize the Stream
Coming soon...

## Process the Stream
Coming soon...

## Conclusion
Coming soon...