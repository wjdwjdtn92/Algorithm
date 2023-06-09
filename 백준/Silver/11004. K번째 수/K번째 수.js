const fs = require('fs');
const [first, second] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = first.split(' ');
const numbersSort = second.split(" ").map(Number).sort((a, b) => a - b);

console.log(numbersSort[Number(k) - 1]);
