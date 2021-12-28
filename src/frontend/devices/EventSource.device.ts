// Adapted from Josh Brewster's implementation for the HEGduino
// Garrett Flynn, Nov 2021 (AGPL License) | totally not tested...

import { Device } from './Device.js'
import { DeviceConstraintsType } from '../types/Devices.types.js'

type customCallback = {
    tag: string,
    callback: () => {}
}

export default class EventSourceDevice<T = any> extends Device<T> {

    url: string = ''
    source?: EventSource
    customCallbacks: customCallback[] = []
    api: {
        [x: string]: Function
    } = {}

    constructor(constraints: DeviceConstraintsType<T>) {
        super(constraints)
    }

    // ---------------------- CORE ----------------------

    //create a function to post to URLS with optional data, usernames, and passwords
    newPostCommand(name: string = "post", url = this.constraints.url, data = undefined, user = undefined, pass = undefined) {
        const func = () => {
            var xhr = new XMLHttpRequest();
            if (url) {
                xhr.open('POST', url, true, user, pass);
                xhr.send(data); //Accepts: string | Document | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array>
                xhr.onerror = function () { xhr.abort(); };
            }
        }
        this.api[name] = func;

        return func;
    }

    send = async (body: any, url = this.url) => await fetch(url, { method: 'POST', body })

    connect = async () => this.createEventListeners();

    disconnect = async () => this.removeEventListeners();

    // ---------------------- CALLBACKS ----------------------

    onconnect = async (e: any) => console.log("Event source connected!", e.data);

    onerror = async (e: any) => {
        console.log("Error:", e.data);
        if (e.target.readyState !== EventSource.OPEN) {
            console.log("Event source disconnected!");
        }
    }

    // ---------------------- INTERNAL UTILITIES ----------------------

    createEventListeners = () => {
        if (this.source !== null) this.removeEventListeners();
        if (window.EventSource) {
            this.source = new EventSource(this.url);
            this.source.addEventListener('open', this.onconnect, false);
            this.source.addEventListener('error', this.onerror, false);
            this.source.addEventListener('message', this.ondata, false);
            if (this.customCallbacks.length > 0) {
                this.customCallbacks.forEach((item, ) => {
                    if (this.source) this.source.addEventListener(item.tag, item.callback, false);
                })
            }
        }
        this.onconnect(this)
    }

    removeEventListeners = () => {
        if (window.EventSource && this.source) {
            this.source.close();
            this.source.removeEventListener('open', this.onconnect, false);
            this.source.removeEventListener('error', this.onerror, false);
            this.source.removeEventListener('message', this.ondata, false);
            if (this.customCallbacks.length > 0) {
                this.customCallbacks.forEach((item, ) => {
                    if (this.source) this.source.removeEventListener(item.tag, item.callback, false);
                });
            }
            this.source = undefined;
        }
        this.ondisconnect(this)
    }

}