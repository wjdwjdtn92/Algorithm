const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function getMoney(numbers) {
    const uniqueNumber = [...new Set(numbers)];
    
    if (uniqueNumber.length === 3) {
        return Math.max(...numbers) * 100;
    }
    
    if (uniqueNumber.length === 2) {        
        if (numbers[0] === numbers[1]) {
            return numbers[0] * 100 + 1000;
        }
        
        if (numbers[1] === numbers[2]) {
            return numbers[1] * 100 + 1000;
        }
        return numbers[2] * 100 + 1000;
    }
    
    return uniqueNumber[0] * 1000 + 10000;
}

console.log(getMoney(numbers));
