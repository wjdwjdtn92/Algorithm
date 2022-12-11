function solution(x) {
    const sum = [...String(x)].reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    
    if (x % sum === 0) {
        return true;
    }
    
    return false;
}