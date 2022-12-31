const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString();
const n = parseInt(input, 10);

const result = Array.from({length: n}, (_, i) => n - i).join("\n");

console.log(result);
