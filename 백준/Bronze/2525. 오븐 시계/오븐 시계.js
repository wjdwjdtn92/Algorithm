const fs = require('fs');
const [startTime, needTime] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [hourString, minuteString] = startTime.split(' ');
const hour = Number(hourString);
const minute = Number(minuteString);
const need = Number(needTime);

const addHour = parseInt(need / 60, 10);
const addMinute = need % 60;

let resultHour = addHour + hour;
let resultMinute = addMinute + minute;

if (resultMinute >= 60) {
    resultMinute -= 60;
    resultHour += 1;
}

if (resultHour >= 24) {
    resultHour -= 24;
}

console.log(`${resultHour} ${resultMinute}`);


