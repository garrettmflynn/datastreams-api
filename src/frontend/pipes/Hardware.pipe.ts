import { Pipe } from "./Pipe";
import { PipeSettingsType } from '../types/Pipes.types'

export default class HardwarePipe extends Pipe {

    get [Symbol.toStringTag]() { return 'HardwarePipe' }

    constructor(settings:PipeSettingsType) {
        super('device', settings)

    }


    // Note: Must actually embed on hardware here
    process = async (args: any | any[]) => {
        if (this.settings.function instanceof Function){
            if (!Array.isArray(args)) args = [args]
            let data = this.settings.function(args) // unfold arguments
            this.ondata({data}) // pass to subscriptions
            return data
        } else return null
    }

    // Hook for Insertable Streams Transform
    transform = async (chunk:any, controller:TransformStreamDefaultController) => {
        if (this.settings.function instanceof Function){
            let res = this.settings.function(chunk) // apples function on hardware (to implement)
            controller.enqueue(res)
        }
    }

}