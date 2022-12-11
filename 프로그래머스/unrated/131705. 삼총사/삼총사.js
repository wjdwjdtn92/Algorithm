function solution(number) {
    let answer = 0;
    
    for (let i = 0; i < number.length - 2; i++) {
        for (let j = i + 1; j < number.length - 1; j ++) {
            const sum = number[i] + number[j];
        
            answer += (number.slice(j + 1).filter(el => el === -sum)).length;
        }
    }
    
    return answer;
}