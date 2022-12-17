function solution(k, m, score) {
    let answer = 0;
    
    const sortScore = [...score].sort((a, b) => a - b);
    
    while(sortScore.length >= m) {
        const spliceScore = sortScore.splice(-m);
        answer += spliceScore[0] * m;
    }
    
    return answer;
}