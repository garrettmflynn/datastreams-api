let times: number[] = []
let red: number[] = []
let ir: number[] = []
let ratio: number[] = []
let ambient: number[] = []
let temp: number[] = []
let refuS: number

export const ondata = (newline:string) => {

    let latest = []

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
            red.push(parseFloat(data[1]));
            ir.push(parseFloat(data[2]));
            ratio.push(parseFloat(data[3]));
            ambient.push(parseFloat(data[4]));
            temp.push(parseFloat(data[5])); // temp is on new firmware
        }
        latest.push(parseFloat(data[3])) // stream latest ratio

    } else {console.log("HEGDUINO: ", newline); }

    return latest
}