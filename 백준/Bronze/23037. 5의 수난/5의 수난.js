const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const result = [...input].reduce((acc, cur) => {
    return acc += Math.pow(Number(cur), 5);
}, 0);

console.log(result);