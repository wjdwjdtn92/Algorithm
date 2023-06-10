const fs = require('fs');
const [length, string] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = string.split(" ").map(Number);

numbers.sort((a, b) => b - a);

const result = numbers.reduce((acc, cur, index) => {
    return acc + (cur * (index + 1));
}, 0)

console.log(result);