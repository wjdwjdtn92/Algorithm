const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
let result = "";

for (let i = Number(input); i >= 1; i--) {
    result += `${i}\n`;
}

console.log(result);
