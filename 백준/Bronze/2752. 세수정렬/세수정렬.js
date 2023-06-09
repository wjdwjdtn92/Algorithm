const fs = require('fs');
const numbers = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const sortNumbers = numbers.sort((a, b) => a - b);

console.log(sortNumbers.join(" "));