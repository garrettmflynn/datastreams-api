
/**
 * The Transform class allows you to specify arbitrary transforms in the ontransform callback. 
 * ```typescript
 * import { transforms } from "datastreams-api";
 *
 * const transform = new transforms.Transform();
 * transform.addEventListener('transform', (chunk, controller) => {
 *      let data = chunk.copy()
 *      chunk.close()
 *      controller.enqueue(chunk)
 * })
 * ```
 */

export class Transform extends EventTarget {

    constructor() {
        super()
        this.addEventListener('start', (e:Event) => this.onstart(e))
        this.addEventListener('transform', ((e:CustomEvent) => this.ontransform(e)) as EventListener)
        this.addEventListener('end', (e:Event) => this.onend(e))

    }
  
    async start() {
        this.dispatchEvent(new Event('start'))
    }
  
    async transform(chunk:any, controller:TransformStreamDefaultController) {
        this.dispatchEvent(new CustomEvent('transfrom', {detail: {chunk, controller}}))
    }
  
    async end() {
        this.dispatchEvent(new Event('end'))
    }

    onstart = (e:Event):any => console.log('Transform started', e)
    ontransform = (e:CustomEvent):any => console.log('Transforming', e)
    onend = (e:Event):any => console.log('Transform ended', e)
  }
  