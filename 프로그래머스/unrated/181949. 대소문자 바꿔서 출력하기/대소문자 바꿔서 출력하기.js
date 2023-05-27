const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    const displayText = [...str].map((value) => {
        if (value === value.toLowerCase()) {
            return value.toUpperCase();
        }
        return value.toLowerCase();
    }).join('');
    
    console.log(displayText);
});