const fs = require('fs');
const [length, ...commandList] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const stack = [];
const result = [];

commandList.forEach((commands) => {
    const [command, number] = commands.split(' ');
    
    if (command === 'push') {
        stack.push(number);
        return;
    }
    
    if (command === 'top') {
        const top = stack[stack.length - 1];
        
        if (top === undefined) {
            result.push(-1);
        } else {
            result.push(top);
        }
        return;
    }
    
    if (command === 'pop') {
        const top = stack.pop();
        
        if (top === undefined) {
            result.push(-1);
        } else {
            result.push(top);
        }
        return;
    }

    if (command === 'empty') {
        if (stack.length === 0) {
            result.push(1);    
        } else {
            result.push(0);
        }
        return;
    }
    
    if (command === 'size') {
        result.push(stack.length);
        return;
    }
});

console.log(result.join('\n'));