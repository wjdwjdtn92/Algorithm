function solution(s) {
    const index = parseInt(s.length / 2, 0);
    
    return s.length % 2 === 0 ? s[index - 1] + s[index] : s[index];
}