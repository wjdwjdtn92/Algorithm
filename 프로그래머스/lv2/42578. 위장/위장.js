/*
 * 종류를 key 값으로 모으는 작업 
 * 모든 경우의 수 구하기
 */

function solution(clothes) {
    const memo = {}
    
    clothes.forEach(([_, key]) => {
       if (!memo[key]) {
           memo[key] = 0;
       }
       memo[key] += 1;
    })
    
    const result = Object.keys(memo).reduce((acc, cur) => {
        return acc * (memo[cur] + 1);
    }, 1)
    
    return result - 1;
}