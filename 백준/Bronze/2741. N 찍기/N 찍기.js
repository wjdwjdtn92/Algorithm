const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const n = Number(input);

const arr = Array.from({length: n}, (_, i) => i + 1);

console.log(arr.join("\n"));