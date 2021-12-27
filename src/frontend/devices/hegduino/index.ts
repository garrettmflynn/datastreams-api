let coord = {
    count: 0,
    times: [],
    red: [],
    ir: [],
    ratio: [],
    ambient: [],
    temp: [],
    refuS: null
}

export const ondata = (newline, atlas) => {

    let latest = []
    if(newline.indexOf("|") > -1) {
        let data = newline.split("|");
        //console.log(data);
        if(data.length > 3) {
            coord.count++;
            if(coord.count === 1) { coord.startTime = Date.now(); }
            if(coord.times.length === 0) {coord.times.push(Date.now()); coord.refuS = parseFloat(data[0]);} //Microseconds = parseFloat(data[0]). We are using date.now() in ms to keep the UI usage normalized
            else {
                let t = parseFloat(data[0]);
                coord.times.push(Math.floor(coord.times[coord.times.length-1]+(t-coord.refuS)*0.001))
                coord.refuS = t; //keep times synchronous
            }
            coord.red.push(parseFloat(data[1]));
            coord.ir.push(parseFloat(data[2]));
            coord.ratio.push(parseFloat(data[3]));
            coord.ambient.push(parseFloat(data[4]));
            coord.temp.push(parseFloat(data[5])); // temp is on new firmware
        }
        latest.push(parseFloat(data[3])) // stream latest ratio

    } else {console.log("HEGDUINO: ", newline); }

    return latest
}