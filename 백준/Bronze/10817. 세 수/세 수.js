const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [a, b, c] = input.map(Number).sort((a, b) => a - b);;

console.log(b);