const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = inputs[0].split(" ").map(Number);
const numbers = inputs[1].split(" ").map(Number);

let left = 1;
let right = Math.max(...numbers);

while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = numbers.reduce((acc, number) => {
        if (number <= mid) {
            return acc;
        }

        return acc + (number - mid);
    }, 0)
    
    if (sum < m) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

console.log(right);

