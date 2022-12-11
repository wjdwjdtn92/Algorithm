function solution(arr, divisor) {
    const divisorResultList = arr.filter(el => el % divisor === 0);
    
    if (divisorResultList.length === 0) {
        return [-1];
    }
    
    return divisorResultList.sort((a, b) => a - b);
}