const fs = require('fs');
const [length, ...numbers] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const sortNumbers = numbers.sort((a, b) => a - b);

console.log(sortNumbers.join("\n"));