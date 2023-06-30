function solution(arr) {
    const length = arr.length;
    let powNum = 1;
    
    while (powNum < length) {
        powNum *= 2;
    }
    
    return arr.concat(Array(powNum - length).fill(0));
}