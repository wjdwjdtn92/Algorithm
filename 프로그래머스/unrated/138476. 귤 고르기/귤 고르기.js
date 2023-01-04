function solution(k, tangerine) {
    let answer = 0;
    const memo = {};
    
    for (const key of tangerine) {
        if(!memo[key]) {
            memo[key] = 0;
        }
        
        memo[key] += 1;
    }
    
    const keys = Object.keys(memo).sort((a, b) => memo[b] - memo[a]);
    
    for (const key of keys) {
        k -= memo[key];
        answer += 1;
        
        if (k <= 0) {
            break;
        }
    }
    
    return answer;
}