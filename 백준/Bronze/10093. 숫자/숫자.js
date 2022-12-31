const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [first, second] = input.map(Number);
let length = Math.abs(first - second);
const min = Math.min(first, second);

if (length === 0) {
    console.log(0);
    return;
}

console.log(length - 1);
console.log(Array.from({length: length - 1}, (_, i) => min + 1 + i).join(" "));