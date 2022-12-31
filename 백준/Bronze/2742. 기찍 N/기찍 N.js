const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString();
const n = Number(input);
let result = "";

for (let i = n; i >= 1; i--) {
    result += i + "\n";
}

console.log(result);
