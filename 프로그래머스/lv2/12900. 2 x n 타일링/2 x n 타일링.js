function solution(n) {
    if(n <= 3) {
        return n;
    }
    
    let preValue = 2;
    let currentValue = 3;
    
    for (let i = 4; i <= n; i++) {
        const nextPreValue = currentValue;
        
        currentValue = (preValue + currentValue) % 1000000007;
        preValue = nextPreValue;
    }
    
    return currentValue;
}