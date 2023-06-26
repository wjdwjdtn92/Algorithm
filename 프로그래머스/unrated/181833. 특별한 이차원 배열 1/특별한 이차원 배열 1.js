function solution(n) {
    const arr = Array.from({length : n}, () => Array(n).fill(0));
    let index = 0;
    
    while (index <= n * n) {
        const i = parseInt(index / n, 10);
        const j = index % n;
        arr[i][j] = 1;
        
        index += n + 1;
    }
    
    return arr;
}