const fs = require('fs');
const n = fs.readFileSync("/dev/stdin").toString().trim()
const number = Number(n);
let sum = 0;

for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log(sum);