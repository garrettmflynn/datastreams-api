import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import * as api from '../../../../../src/frontend';
import devices from '../../../../../src/frontend/devices/device.registry';

export default function DeviceExample({server}) {

  const container = useRef(null);
  const dataDevices = new api.DataDevices()
  dataDevices.load(devices)

  const addTrackAction = (track) => {
    track.subscribe(data => {
      console.log(track.contentHint, data)
    })
  }


  useEffect(() => {
    dataDevices.getSupportedDevices('data').then(res => {
      console.log(res)
      res.forEach(o => {
        const button = document.createElement('button')
        button.innerHTML = o.label
        let {protocols} = dataDevices.getDeviceInfo(o)
        protocols.forEach(protocol => {

          const button = document.createElement('button')
          button.innerHTML = (protocols.length > 1) ? `${o.label} (${protocol})` : o.label

          button.onclick = () => {
            dataDevices.getUserStream(Object.assign({[protocol]: true}, o)).then((stream) =>{
              console.log(stream)
              let tracks = stream.getTracks()
              stream.addEventListener('addtrack', (o) => {
                addTrackAction(o.track)
              })


              console.log(tracks)
              tracks.forEach(addTrackAction)
            })
          }

          container.current.insertAdjacentElement('beforeend', button)

        })
      })
    })

  });
  
    return (
        <div ref={container} className="container">
          <h1 className="hero__title">Device</h1>
          {/* <button ref={connectButton}>Connect</button> */}
        </div>
    );
  }
  