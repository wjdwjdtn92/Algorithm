const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = Number(inputs[0]);
const results = [];

for (let i = 1; i <= num; i++) {
    const [a, b] = inputs[i].split(" ").map(Number);
    results.push(a + b);
}

console.log(results.join('\n'));