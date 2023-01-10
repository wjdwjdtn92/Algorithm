/*
 * 효진 1, 2칸
 * n 4 => 2가 2개, 1개, 0개
 * 5 => 1 / 2 1 1 1 4 / 2 2 1 3 / 8
 * 6 => 1 / 2 1 1 1 1 5 / 2 2 1 1 6 / 2 2 2 1 13 
 * 7 => 1 / 2 1 1 1 1 1 6 / 2 2 1 1 1 10 / 2 2 2 1 4 21
 **/

function solution(n, memo = [0, 1, 2]) {
    if (memo[n] !== undefined) {
        return memo[n];
    } 
    
    memo[n] = (solution(n - 2, memo) + solution(n - 1, memo)) % 1234567;
    
    return memo[n];
}