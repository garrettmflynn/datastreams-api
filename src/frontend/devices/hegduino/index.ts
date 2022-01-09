let times: number[] = []
let refuS: number

export const onconnect = (arg1:any, arg2: any) => {
    console.log(arg1, arg2)
}

export const ondata = (newline:string) => {

    let latest: {[x: string]: any[]} = {
        // times: [],
        red: [],
         ir:  [],
         ratio: [],
         ambient: [],
         temp: []
    }

    if(newline.indexOf("|") > -1) {
        let data = newline.split("|");
        //console.log(data);
        if(data.length > 3) {
            // count++;
            // if(count === 1) { startTime = Date.now(); }
            if(times.length === 0) {times.push(Date.now()); refuS = parseFloat(data[0]);} //Microseconds = parseFloat(data[0]). We are using date.now() in ms to keep the UI usage normalized
            else {
                let t = parseFloat(data[0]);
                times.push(Math.floor(times[times.length-1]+(t-refuS)*0.001))
                refuS = t; //keep times synchronous
            }

            latest.red.push(parseFloat(data[1]));
            latest.ir.push(parseFloat(data[2]));
            latest.ratio.push(parseFloat(data[3]));
            latest.ambient.push(parseFloat(data[4]));
            latest.temp.push(parseFloat(data[5])); // temp is on new firmware
        }
        // latest.push(parseFloat(data[3])) // stream latest ratio

    } else {console.log("HEGDUINO: ", newline); }

    console.log('latest',latest)
    return latest
}