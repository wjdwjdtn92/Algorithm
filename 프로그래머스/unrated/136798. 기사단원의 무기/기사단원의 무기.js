// 절반으로 나누기
// 배수에 개수 더하기 누적 or 그냥 각자 구해보기

function getDivisorCount(num) {
    if (num === 1) {
        return num;
    }
    
    let count = 2;
    
    for (let i = 2; i * i < num; i++) {
        if (num % i === 0) {
            count += 2;
        }
    }
    
    if (Number.isInteger(Math.sqrt(num))) {
        count += 1;
    }
    
    return count;
}

function solution(number, limit, power) {
    let answer = 0;
    
    for (let i = 1; i <= number; i++) {
        const divisorCount = getDivisorCount(i);
        
        if (divisorCount > limit) {
            answer += power;
        } else {
            answer += divisorCount;
        }
    }
   
    
    return answer;
}