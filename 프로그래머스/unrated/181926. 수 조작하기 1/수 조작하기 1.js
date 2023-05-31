function solution(n, control) {
    const map = {
        w: 1,
        s: -1,
        d: 10,
        a: -10,
    }
    
    const result = [...control].reduce((acc, cur) => {
        return acc + map[cur];
    }, n)
    
    return result;
}