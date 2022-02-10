import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import ws from 'ws'
import * as services from './backend/services'
import * as id from './common/id'

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting the port
var port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

// Serve the files
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!\n`);
});

const wss = new ws.Server({ port: 80 }); // TODO: Check if working

let webrtc = new services.PeerService()
let server = new services.OffloadService()
let source = new services.SourceService()


// Connect Websocket
wss.on('connection', function (ws: any) {

    const subprotocols:{[x:string]:any} = {}
    let subArr = ws.protocol.split(';')
    subArr.forEach((str:string) => {
      let subSplit = str.split('.brainsatplay.com%')
      subprotocols[subSplit[0]] = subSplit[1].split(',')
    })

    
    ws.id = id.randomUUID()
    webrtc.addUser(ws, subprotocols.auth)
    server.addUser(ws)
    source.addUser(ws)

    ws.on('message', function message(o:string) {

      try{
        let parsed = JSON.parse(o)

        // Send Message through WebRTC Service
        if (parsed.service === 'webrtc') webrtc.onmessage(o, ws)

         // Parse Command for Server Offloading
         if (parsed.service === 'offload') server.onmessage(o, ws)

      } catch (e: any) {
        // let buf = new Uint8Array(o).buffer;
        // var dv = new DataView(buf);
        ws.send(JSON.stringify({error: e.message}))
      }

    });
    
    ws.on('close', () => {
        webrtc.removeUser(ws)
        server.removeUser(ws)
        source.removeUser(ws)
    });
});



/*
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val:any) {
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
  