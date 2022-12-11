function solution(left, right) {
    var answer = 0;
    
    for (let i = left; i <= right; i++) {
        const isISqrtInteger = Number.isInteger(Math.sqrt(i));
        
        if (isISqrtInteger) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    
    return answer;
}