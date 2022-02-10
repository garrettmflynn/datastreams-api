import { Device } from "../Device";

declare var webgazer: any; // Solves Typescript error

export const onconnect = async (dataDevice: Device<Webgazer>) => {

    let device = dataDevice.device
    device.subscribe((data:{
        eyeFeatures: any,
        x: number,
        y: number
    }) => {

            let o: {
                // times: number[],
                x: number[],
                y: number[]
            } = {
                // times: [],
                x: [],
                y: []
            }

            // o.times.push(Date.now());
            o.x.push(data.x);
            o.y.push(data.y);

        dataDevice.ondata(o)
    })
}

export class Webgazer {

    device: any | null = null;

    callbacks: Function[] = []


    constructor() {

    }

    handleScriptLoad= async(onload:Function)=> {    

        // Set Webgazer Settings
        this.startWebgazer(webgazer)
        webgazer.showVideo(true)
        webgazer.showFaceOverlay(true)
        webgazer.showFaceFeedbackBox(true)
        webgazer.showPredictionPoints(true)
        webgazer.setRegression('weightedRidge')
        
        this.checkWebGazerLoaded(onload)
    }

    checkWebGazerLoaded = (onload:Function) => {
        let interval = setInterval(() => {
            if(webgazer.isReady()) {
                clearInterval(interval)
                this.device = webgazer
                onload()
            }
            else {
                console.log('webgazer not loaded ____')
            }
            
        },1000)
    }


    startWebgazer(webgazer: any){


        webgazer.setGazeListener((data:{
            eyeFeatures: any,
            x: number,
            y: number
        },_:number) => {
            if(data == null) return  

            this.callbacks.forEach(f => {
                f(data)
            })
            
        }).begin();
    }


    connect = async () => {
        
        return new Promise(async (resolve, _) => {

        // Create a callback to throw when Webgazer has loaded
        let onload = () => {
            let video = document.getElementById('webgazerVideoContainer')
            if (video) {
                video.style.position = 'absolute';
                video.style.top = '0';
                video.style.left = 'auto';
                video.style.right = '100px';
                video.style.zIndex = '1000';
                video.style.width = '200px';
                video.style.height = '200px';
            }


            resolve(true)
        }

        // Import Webgazer as a script
        const script = document.createElement("script");
        script.src = "https://webgazer.cs.brown.edu/webgazer.js"
        script.async = true;

        script.onload = () => {
            this.handleScriptLoad(onload);
        }
        document.body.appendChild(script);
    })
    }

    disconnect = () => {
        if (this.device) this.device.end();
    }

    subscribe = (f:Function) => {
        if (f instanceof Function) this.callbacks.push(f)
    }
}