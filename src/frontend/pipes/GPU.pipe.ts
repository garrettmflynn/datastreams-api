/** 
 * Transforms data on the GPU using GPU
 * Note: Currently broken from .ts refactor
 */

import {Pipe} from './Pipe'
import { PipeSettingsType } from '../types/Pipes.types'

export class GPUPipe extends Pipe{
  constructor(settings:PipeSettingsType){
    super('gpu', settings)
  }
}

// import 'gpujsutils/gpu/gpu-browser.min'
// import { gpuUtils } from 'gpujsutils/gpuUtils'
// import { createGpuKernels as krnl } from 'gpujsutils/gpuUtils-functs';
// import { PipeSettingsType } from '../types/Pipes.types'
// import { DataStream } from '../core/index';

// /** 
//  * GPU Data Pipe for the DataStreams API
//  * Note: Currently only works for convolution on a video element
//  */


// export class GPUPipe extends Pipe{

//     get [Symbol.toStringTag]() { return 'GPU' }

//     // Create GPU Instance
//     // gpu: any = new GPU({mode: 'gpu'})
//     gpuUtils: gpuUtils = new gpuUtils() // new gpuUtils(this.gpu)
//     container?: HTMLElement | Node
//     width?: number
//     height?: number
//     canvas?: HTMLCanvasElement
//     loaded: boolean = false

//     constructor(settings:PipeSettingsType) {
//         super('gpu', settings)

//         // Replace Existing Video Visually
//         if (this.settings.element) {
//           this.container = this.settings.element.parentNode ?? document.createElement('div') // place canvas in the parent of the element
//           // this.settings.element.style.position = 'absolute'
//           // this.settings.element.style.visibility = 'hidden'

//           let k = this.gpuUtils.addCanvasKernel('convolveImage', krnl.ImgConv2DKern, this.container)
//           this.canvas = k.canvas

//           // Setting canvas position
//           this.width = this.settings.element.clientWidth
//           this.height = this.settings.element.clientHeight
//           let reducedElement = this.settings.element // this.canvas
//           reducedElement.style.position = 'absolute'
//           reducedElement.style.bottom = '0px'
//           reducedElement.style.right = '0px'
//           reducedElement.style.width = '100px'
//           reducedElement.style.height = '50px'


//           this.settings.element.addEventListener('loadeddata',()=>{ this.loaded = true})
            
//           // TODO: Can't stream yet. This breaks.
//           // let canvasStream = this.canvas.captureStream()
//           // this.settings.element.srcObject = canvasStream
//         } 
        
//         // Otherwise allow the user to declare custom functions
//         else {
//           // let k = this.gpuUtils.addKernel(this.settings.name, this.settings.function, this.container)
//         }
//     }


//     // Note: Must actually thread here
//     process = async (args: any | any[]) => {
//         if (!Array.isArray(args)) args = [args]
//         // console.log(args)

//         let data 
//         if (this.settings.element && Array.isArray(args[0])){

//           if (this.loaded){
//             // Ensure Proper Scaling
//             let dims = this.getDimensions()
//             let width = dims.width
//             let height = dims.height
//             this.settings.element.width = width ?? 0
//             this.settings.element.height = height ?? 0

//             // Run Video Convolution
//             let gpuArgs = [this.settings.element, width, height, args[0], args[0].length];
//             // console.log(gpuArgs)
//             data = this.gpuUtils.callCanvasKernel('convolveImage', gpuArgs, [width, height]) // set output width and height
//           }

//           this.ondata({data}) // pass to subscriptions

//         } else {
//           // data = this.gpuUtils.call(this.settings.name, args) // set output width and height
//           // console.log(data)
//           // this.ondata({data}) // pass to subscriptions

//         }

//         return data
//     }

//     // --------------------------------------- Video Helper Functions ---------------------------------------
//     getDimensions = () => {
//         let settings = (this.settings.element?.srcObject as DataStream)?.getVideoTracks()[0].getSettings()
//         let width = this.width // mirror video width
//         let height = this.height // mirror video height
//         let sourceWidth = settings.width ?? width
//         let sourceHeight = settings.height ?? height
//         return { width, height, sourceWidth, sourceHeight }
//       }
// }