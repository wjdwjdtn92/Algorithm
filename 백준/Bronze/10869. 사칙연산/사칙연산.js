const fs = require('fs');
const [first, second] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const firstToNumber = Number(first);
const secondToNumber = Number(second);

console.log(firstToNumber + secondToNumber);
console.log(firstToNumber - secondToNumber);
console.log(firstToNumber * secondToNumber);
console.log(parseInt(firstToNumber / secondToNumber, 10));
console.log(firstToNumber % secondToNumber);