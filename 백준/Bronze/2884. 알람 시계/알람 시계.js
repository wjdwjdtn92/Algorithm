const fs = require('fs');
const [hour, minute] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let alarmMinute = Number(minute);
let alarmHour = Number(hour);

if (alarmMinute < 45) {
    alarmMinute += 15;
    alarmHour -= 1;
} else {
    alarmMinute -= 45;
}

if (alarmHour < 0) {
  alarmHour = 23;
}

console.log(`${alarmHour} ${alarmMinute}`);