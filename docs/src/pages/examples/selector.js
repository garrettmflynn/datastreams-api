import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './examples.module.css';
import ConferenceExample from './components/conference';
import ChatExample from './components/chat';

export default function ExampleSelector({server}) {

    const [example, setExample] = React.useState('conference');

    const renderExample = (name) => {
        switch(name) {
          case 'conference':
            return <ConferenceExample server={server}/>
        case 'chat':
            return <ChatExample server={server}/>
        }
      }
  
    return (
        <>
      <nav className={clsx(styles.nav)}>
        <button onClick={() => setExample('conference')}>
          Conference
        </button>
        <button onClick={() => setExample('chat')}>
          Chat
        </button>
        </nav>

        <header className={clsx('hero hero--primary')}>
            {renderExample(example)}
        </header>
        </>
    );
  }
  