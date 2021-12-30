const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const services = require('./services')
const id = require('../common/id')

const app = express();
app.use(cors()) // allow Cross-domain requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Websocket Imports
const ws = require('ws')

// Setting the port
var port = normalizePort(process.env.PORT || '8080'); // Secure
app.set('port', port);

// Serve the files on port 3000.
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!\n`);
});

const wss = new ws.WebSocketServer({ port: 80 });

let webrtc = new services.PeerService(wss)
let server = new services.OffloadService(wss)
let source = new services.SourceService(wss)


// Connect Websocket
wss.on('connection', function (ws, msg, req) {

    let auth = ws.protocol
    // console.log(auth)

    ws.id = id.randomUUID()
    webrtc.addUser(ws, auth)
    server.addUser(ws)
    source.addUser(ws)

    console.log('User added!');

    ws.on('message', function message(o) {

      try{
        let parsed = JSON.parse(o)

        // Send Message through WebRTC Service
        if (parsed.service === 'webrtc') webrtc.onmessage(o, ws)

         // Parse Command for Server Offloading
         if (parsed.service === 'offload') server.onmessage(o, ws)

      } catch (e) {
        // let buf = new Uint8Array(o).buffer;
        // var dv = new DataView(buf);
        ws.send(JSON.stringify({error: e.message}))
      }

    });
    
    ws.on('close', () => {
        console.log('User disconnected!', ws.id);
        webrtc.removeUser(ws)
        server.removeUser(ws)
    });
});



/*
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
  