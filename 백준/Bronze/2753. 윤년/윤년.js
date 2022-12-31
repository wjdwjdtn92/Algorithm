const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const year = parseInt(input, 10);

if (year % 4 !== 0) {
    console.log(0);
} else if (year % 100 !== 0) {
    console.log(1);
} else if (year % 400 === 0) {
    console.log(1);
} else {
    console.log(0);    
}

