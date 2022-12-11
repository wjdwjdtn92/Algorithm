function solution(a, b) {
    var answer = a.reduce((acc, cur, index) => {
        const multiplyResult = cur * b[index];
        
        return multiplyResult + acc;
    }, 0);
    
    return answer;
}