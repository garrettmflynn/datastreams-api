    
const safeParse = (input, first=true) => {

    if (first) input = JSON.parse(input)
    // Convert Stringified Functions to String
    for (let key in input){
        let value = input[key]
        let regex = new RegExp('(|[a-zA-Z]\w*|\([a-zA-Z]\w*(,\s*[a-zA-Z]\w*)*\))\s*=>')
        let func = (typeof value === 'string') ? value.substring(0, 8) == 'function' : false
        let arrow = (typeof value === 'string') ? regex.test(value) : false
        
        try {
            input[key] = (func || arrow) ? eval('(' + value + ')') : value;
        } catch (e) {
            console.error(e, value)
            input[key] = value
        }
        
        if (input[key] instanceof Object) safeParse(input[key], false)
    }

    return input
}

const safeStringify = (input) => {

    // Stringify Functions
    for (let key in input){
        if (input[key] instanceof Function) input[key] = input[key].toString()
        if (input[key] instanceof Object) safeStringify(input[key])
    }

    // Actually Stringify
    return JSON.stringify(input)

}

module.exports = {safeParse, safeStringify}; 

