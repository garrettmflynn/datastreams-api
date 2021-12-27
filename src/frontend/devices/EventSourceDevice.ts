// Adapted from Josh Brewster's implementation for the HEGduino
// Garrett Flynn, Nov 2021 (AGPL License) | totally not tested...

import { Device } from './Device.js'

type customCallback = {
    tag: string,
    callback: () => {}
}

export default class EventSourceDevice extends Device {

    url: string = ''
    source: EventSource | null = null
    customCallbacks: customCallback[] = []

    constructor(constraints) {
        super(constraints)
        this.url = constraints.url;
    }

// ---------------------- CORE ----------------------

//create a function to post to URLS with optional data, usernames, and passwords
newPostCommand(name="post",url=this.url,data=undefined,user=undefined,pass=undefined) {
    const func = () => {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true, user, pass);
        xhr.send(data); //Accepts: string | Document | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array>
        xhr.onerror = function() { xhr.abort(); };
    }
    this[name] = func;

    return func;
}

send = async (body, url=this.url) => await fetch(url, {method: 'POST', body})

connect = async () => this.createEventListeners();

disconnect = async () => this.removeEventListeners();

// ---------------------- CALLBACKS ----------------------

onconnect = async (e) => console.log("Event source connected!", e.data);

onerror = async (e) => {
    console.log("Error:", e.data);
    if (e.target.readyState !== EventSource.OPEN) {
        console.log("Event source disconnected!");
    }
}

ondata = (e) => console.log("event source:", e.data);

// ---------------------- INTERNAL UTILITIES ----------------------

createEventListeners = () => {
    if(this.source !== null) this.removeEventListeners();
    if(window.EventSource) {
        this.source = new EventSource(this.url);
        this.source.addEventListener('open', this.onconnect, false);
        this.source.addEventListener('error', this.onerror, false);
        this.source.addEventListener('message', this.ondata, false);
        if(this.customCallbacks.length > 0){
            this.customCallbacks.forEach((item,i) => {
                this.source.addEventListener(item.tag, item.callback, false);
            })
        }
    }
    this.onconnect(this)
}

removeEventListeners = () => {
    if (window.EventSource) {
        this.source.close();
        this.source.removeEventListener('open', this.onconnect, false);
        this.source.removeEventListener('error', this.onerror, false);
        this.source.removeEventListener('message', this.ondata, false);
        if(this.customCallbacks.length > 0){
            this.customCallbacks.forEach((item,i) => {
                this.source.removeEventListener(item.tag, item.callback, false);
            });
        }
        this.source = null;
    }
    this.ondisconnect(this)
}

}