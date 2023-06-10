const fs = require('fs');
const [first, ...rests] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = first.split(" ").map(Number);
const numbers = rests.map(Number);

let changes = K;
let count = 0;

for (let i = numbers.length - 1; i >= 0; i--) {
    if(changes === 0) {
        break;
    }
    
    if (numbers[i] > changes) {
        continue;
    }
    
    const currentCount = parseInt(changes / numbers[i], 10);
    count += currentCount;
    changes -= currentCount * numbers[i];
}

console.log(count);
