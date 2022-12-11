function solution(n) {
    let answer = 3; 
    
    if (n % 2 !== 0) {
        return 2;
    }
    
    while (answer <= n) {
        if (n % answer === 1) {
            break;
        }
        
        answer = answer + 2;
    }
    
    return answer;
}