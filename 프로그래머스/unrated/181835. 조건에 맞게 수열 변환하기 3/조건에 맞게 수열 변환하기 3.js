function solution(arr, k) {
    if (k % 2 === 0) {
        return arr.map((value) => value + k);
    }
        
    return arr.map((value) => value * k);
}