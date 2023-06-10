const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim();

const numbers = [...inputs].map(Number);

numbers.sort((a, b) => b - a);

console.log(numbers.join(""));

