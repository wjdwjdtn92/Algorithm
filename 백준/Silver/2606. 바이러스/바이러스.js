function dfs(gragh, v, visited) {
    visited[v] = true;
    let count = 1;
    
    for (i of gragh[v]) {
        if (!visited[i]) {
            count += dfs(gragh, i, visited, count);
        }
    }
    
    return count;
}



const fs = require('fs');
const [nString, m, ...numbersString] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(nString);

const visited = Array(n).fill(false);
const gragh = Array.from({length: n + 1}, () => []);
const numbers = numbersString.map((numberString) => numberString.split(" ").map(Number));

numbers.forEach((number) => {
    gragh[number[0]].push(number[1]); 
    gragh[number[1]].push(number[0]); 
});

console.log(dfs(gragh, 1, visited) - 1);
