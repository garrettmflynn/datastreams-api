import React, { useEffect, useRef } from 'react';
import styles from '../examples.module.css'

const Overlay = React.forwardRef((props, ref) => {
    const overlay = useRef(null);
    const button = useRef(null);
    const close = useRef(null);

    useEffect(() => {
        button.current.onclick = toggle
        close.current.onclick = toggle
    })


    let toggle = () => {
        overlay.current.classList.toggle(styles.on)
        if (overlay.current.classList.contains(styles.on)) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = ''
    }

    return (
        <>
        <button ref={button}>Connect a Device</button>
        <div ref={overlay} className={styles.overlay}>
            <div className={styles.flex}>
                <h1>{props.header}</h1>
                <button ref={close}>Close</button>
            </div>
            <div ref={ref}>{props.content}</div>
        </div>
        </>
        )
})

export default Overlay