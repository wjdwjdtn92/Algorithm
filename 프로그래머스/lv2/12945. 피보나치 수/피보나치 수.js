function fibo(num) {
    const memo = {0: 0, 1: 1}
    
    for (let i = 2; i <= num; i++) {
        memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567; 
    }

    return memo[num] % 1234567;
}

function solution(n) {    
    return fibo(n);
}