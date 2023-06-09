function solution(a, d, included) {
    let sum = 0;
    
    for (let i = 0; i < included.length; i++) {
        if (included[i] === false) {
            continue;
        }
        sum += (a + i * d);
    }
    
    return sum;
}