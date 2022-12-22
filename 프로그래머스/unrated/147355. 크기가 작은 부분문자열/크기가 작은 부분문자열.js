function solution(t, p) {
    var answer = 0;
    
    for (let i = 0; i < t.length - p.length + 1; i++) {
        let isLessThen = true;
        
        for (let j = 0; j < p.length; j++) {
            if (Number(t[i + j]) > Number(p[j])) {
                isLessThen = false;
                break;
            }
            
            if (Number(t[i + j]) < Number(p[j])) {
                break;
            }
        }
        
        if (isLessThen) {
            answer += 1;
        }
    }
    
    return answer;
}