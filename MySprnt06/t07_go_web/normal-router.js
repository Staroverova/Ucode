'use strict'

let start = new Date("01-01-1939");

exports.calculateTime = () => {

    let result = {};
    let now = new Date();
    result.years = () => {return now.getFullYear() - start.getFullYear()};
    result.months = () => {return now.getMonth() - start.getMonth()};
    result.days = () => {return now.getDate() - start.getDate()};
    return result;
}
exports.now = () => {
    let now = new Date();
    return now;
}