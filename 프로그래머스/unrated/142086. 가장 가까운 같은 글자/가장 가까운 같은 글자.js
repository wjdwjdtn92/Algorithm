function solution(s) {
    var answer = [];
    const memo = {};
    
    for (let i = 0; i < s.length; i++) {
        if(!memo.hasOwnProperty(s[i])) {
            answer.push(-1);
        } else {
            answer.push(i - memo[s[i]]);
        }
        memo[s[i]] = i;
    }
    
    return answer;
}