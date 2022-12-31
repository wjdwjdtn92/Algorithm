const fs = require('fs');
const [n, ...inputs] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const splitInputs = inputs.map(str => str.split(" "));
const sortedInputs = splitInputs.sort((a, b) => Number(a[1]) - Number(b[1]));

console.log(sortedInputs[0][0]);