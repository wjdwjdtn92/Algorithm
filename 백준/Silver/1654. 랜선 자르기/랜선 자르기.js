const fs = require('fs');
const [inputs, ...numbersString] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [k, n] = inputs.split(" ").map(Number);
const numbers = numbersString.map(Number);

let left = 1;
let right = Math.max(...numbers);

while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = numbers.reduce((acc, number) => {
        return acc + Math.floor(number / mid);
    }, 0)
    
    if (sum < n) {
        right = mid - 1; 
    } else {
        left = mid + 1;
    }
}

console.log(right);
