    
export const safeParse = (input:string | {
    [x: string]:any
}) => {

    if (typeof input === 'string' ) input = JSON.parse(input)

    if (typeof input === 'object'){
        // Convert Stringified Functions to String
        for (let key in input){
            let value = input[key]
            let regex = new RegExp('(|[a-zA-Z]\w*|\([a-zA-Z]\w*(,\s*[a-zA-Z]\w*)*\))\s*=>')
            let func = (typeof value === 'string') ? value.substring(0, 8) == 'function' : false
            let arrow = (typeof value === 'string') ? regex.test(value) : false
            
            try {
                input[key] = (func || arrow) ? new Function(value) : value;
                // REMOVE EVAL FOR ROLLUP
                // input[key] = (func || arrow) ? eval('(' + value + ')') : value;
            } catch (e) {
                input[key] = value
            }
            
            if (typeof input[key] === 'object') safeParse(input[key])
        }

        return input

    } else return {}
}

export const safeStringify = (input:any) => {

    // Stringify Functions
    for (let key in input){
        if (input[key] instanceof Function) input[key] = input[key].toString()
        if (input[key] instanceof Object) safeStringify(input[key])
    }

    // Actually Stringify
    return JSON.stringify(input)

}
