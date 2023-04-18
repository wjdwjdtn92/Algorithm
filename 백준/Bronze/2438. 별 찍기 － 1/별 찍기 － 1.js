const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const num = Number(input);
const star = "*";

for (let i = 1; i <= num; i++) {
    console.log(star.repeat(i));
}
