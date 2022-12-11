function solution(n) {
    const result = [...String(n.toString(3))].reverse().join('');
    
    return parseInt(result, 3);
}