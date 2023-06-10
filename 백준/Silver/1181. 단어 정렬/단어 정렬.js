const fs = require('fs');
const [length, ...strings] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const uniqueStrings = [...new Set(strings)];
const sortString = uniqueStrings.sort((a, b) => a.length - b.length || a < b && -1);

console.log(sortString.join("\n"));