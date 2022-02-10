import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './examples.module.css';
import WebRTCExample from './components/webrtc';
import DeviceExample from './components/device';
import { useHistory, useLocation } from 'react-router';

export default function ExampleSelector({server}) {
   const history = useHistory();
    var url = globalThis.location;
    var name = new URLSearchParams(url.search).get('name');
    const [example, setExample] = React.useState(name ?? 'device');


    const renderExample = (name) => {
        switch(name) {
          case 'device':
            return <DeviceExample server={server}/>
          case 'webrtc':
            return <WebRTCExample server={server}/>
        }
      }

    const set = (name) => {
      history.replace(`/examples?name=${name}`)
      setExample(name)
    }
  
    return (
        <>
      <nav className={clsx(styles.nav)}>
        <button onClick={() => set('device')}>
          Device
        </button>
        <button onClick={() => set('webrtc')}>
          WebRTC
        </button>
        </nav>

        <header>
            {renderExample(example)}
        </header>
        </>
    );
  }
  