const fs = require('fs');
const [ALength, A, MLength, M] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(input => input.split(' '));


const array = new Set(A);

const result = M.map(v => array.has(v) ? 1 : 0);

console.log(result.join("\n"));