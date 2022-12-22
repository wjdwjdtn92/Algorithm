// 절반으로 나누기
// 배수에 개수 더하기 누적 or 그냥 각자 구해보기

function getDivisorCount(num) {
    const memo = [0, ...Array(num).fill(1)];
    
    for (let i = 2; i <= num; i++) {
        for (let j = i; j <= num; j += i) {
            memo[j] += 1;
        }
    }
    
    return memo.slice(1);
}

function solution(number, limit, power) {
    let answer = 0;
    
    getDivisorCount(number).forEach((divisorCount) => {
        if (divisorCount > limit) {
            answer += power;
        } else {
            answer += divisorCount;
        }
    })
   
    
    return answer;
}