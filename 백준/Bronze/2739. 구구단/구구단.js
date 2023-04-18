const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const num = Number(input);
const arr = Array.from({length: 9}, (_, i) => (i + 1));

const result = arr.map((value)=> `${num} * ${value} = ${num * value}`)
const printString = result.join('\n');

console.log(printString);