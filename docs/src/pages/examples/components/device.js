import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'
import clsx from 'clsx';
import * as api from '../../../../../src/frontend';
import devices from '../../../../../src/frontend/devices/device.registry';
import { WebglLinePlotUtils } from '../libraries/webgl-plot-utils';
import { DataStream } from '../../../../../src/frontend';
import styles from '../examples.module.css'
import Radio from './radio.component';

export default function DeviceExample({server}) {

  const container = useRef(null);
  const buttons = useRef(null);
  const canvas = useRef(null);

  const dataDevices = new api.DataDevices()
  dataDevices.load(devices)


let plotutil, spss = [], trackBuffers = []

let initPlot = (currentTracks) => {

    // Plot the Lines
    let nSec = 10;
    let nPointsRenderedPerSec = 60;
    let sps = nSec * nPointsRenderedPerSec

    let length = currentTracks.length
    spss = Array.from({ length }, e => sps)
    trackBuffers = Array.from({ length }, e => [])
    plotutil.initPlot(length, spss, nSec, nPointsRenderedPerSec);
    
      // let i = 0
      currentTracks.forEach((track, i) => {
          track.subscribe((data, name) => {
              // if (track.data.length > sps) trackBuffers[i] = track.data.slice(-sps)
              // else trackBuffers[i] = track.data
              if (trackBuffers[i].length === 0) trackBuffers[i]  = Array.from({length:sps}, e => data)
              else {
                  trackBuffers[i].pop()
                  trackBuffers[i].unshift(data)
              }
          })
      })
  }

  // Start Animation
  let newFrame = () => {
      if (trackBuffers.length > 0) {
          plotutil.updateAllLines(trackBuffers, spss, true);
          plotutil.update();
      }
      requestAnimationFrame(newFrame);
  }

  requestAnimationFrame(newFrame);


  // Run After Initialization
  useEffect(() => {

    // Setup Plotting
    let source = new DataStream()

  // Add Canvas Data Readout
  plotutil = new WebglLinePlotUtils(canvas.current, false)


    source.addEventListener('addtrack', (ev) => {
        initPlot(source.getDataTracks()) 
    })

    source.addEventListener('removetrack', (ev) => {
        initPlot(source.getDataTracks()) 
    })

  // Start Animation
    let newFrame = () => {
      if (trackBuffers.length > 0) {
          plotutil.updateAllLines(trackBuffers, spss, true);
          plotutil.update();
      }
      requestAnimationFrame(newFrame);
  }

  requestAnimationFrame(newFrame);

    dataDevices.getSupportedDevices('data').then(res => {
      res.forEach(o => {

        let {protocols, modes} = dataDevices.getDeviceInfo(o)
        const constraints = {
          protocol: protocols?.[0],
          mode: modes?.[0]
        } // Per-device constraints

        const deviceDiv = document.createElement('div')
        deviceDiv.classList.add(clsx(styles.deviceDiv))
        const device = document.createElement('h2')
        device.innerHTML = o.label
        deviceDiv.insertAdjacentElement('beforeend', device)
        buttons.current.insertAdjacentElement('beforeend', deviceDiv)
        let howToConnect = document.createElement('div')
        deviceDiv.insertAdjacentElement('beforeend', howToConnect)
        
        if (protocols.length > 0) {

          ReactDOM.createPortal(ReactDOM.render(<Radio
            name={`${o.label}-protocol`}
            header={'Protocol'}
            options={protocols}
            default={constraints.protocol}
            callback={(ev) => {
              constraints.protocol = ev.target.value
            }}
          />, howToConnect), howToConnect, () => { console.log('REDRAW') });
          }
          
        let modeDiv = document.createElement('div')
        deviceDiv.insertAdjacentElement('beforeend', modeDiv)
        if (modes) {
          const radio = <Radio
          name={`${o.label}-mode`}
          header={'Mode'}
          options={modes}
          default={constraints.mode}
          callback={(ev) => {
            constraints.protocol = ev.target.value
          }}
        />
          ReactDOM.createPortal(ReactDOM.render(radio, modeDiv), modeDiv, () => { console.log('REDRAW') });
        }

        const button = document.createElement('button')
        button.innerHTML = 'Connect'


        let connectFunc = () => {
          dataDevices.getUserStream(Object.assign(constraints, o)).then((device) =>{

            let stream = device.stream
            let tracks = stream.getTracks()

            stream.addEventListener('addtrack', (ev) => {
              source.addTrack(ev.track)
            })

            tracks.forEach(t => source.addTrack(t))

            button.innerHTML = 'Disconnect'
            button.onclick = () => {
              device.disconnect()
              button.innerHTML = 'Connect'
              button.onclick = connectFunc
            }
          })
        }

        button.onclick = connectFunc

        deviceDiv.insertAdjacentElement('beforeend', button)
      })
    })

  });
  
    return (
        <div ref={container} className={clsx(styles.container)}>
                    <canvas ref={canvas}></canvas>
          <div ref={buttons}>
          </div>
        </div>
    );
  }
  