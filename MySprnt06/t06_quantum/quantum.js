'use strict'

let start = new Date("01-01-1939");
let difference = 7;

exports.calculateTime = () => {
    let result = [];
    let now = new Date();
    console.log(now + '--' + start);

    now = new Date(Math.round((now.getTime() - start.getTime()) / difference + start.getTime()));
    //console.log(now + '--' + start);
    result.push(now.getFullYear() - start.getFullYear());
    result.push(now.getMonth() - start.getMonth());
    result.push(now.getDate() - start.getDate());
    return result;
}