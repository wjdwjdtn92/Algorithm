const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const sortedArr = [...inputs].sort((a, b) => a - b);

console.log(sortedArr.join(" "));