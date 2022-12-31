const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const result = [];

for (let i = 0; i < inputs.length - 1; i++) {
    const [a, b] = inputs[i].trim().split(" ");
    
    if (Number(a) > Number(b)) {
        result.push("Yes");
    } else {
        result.push("No");
    }
}

console.log(result.join("\n"));
