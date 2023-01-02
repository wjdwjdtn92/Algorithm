/**
 * 최대 2명
 * 30 40 50 50 70 80 
 */

function solution(people, limit) {
    let answer = 0;
    const sortedPeople = [...people].sort((a, b) => a - b);
    const length = people.length;
    
    let i = 0;
    let j = length - 1;
    let isStartLoop = false;
    
    while (i <= j) {
        if (sortedPeople[i] + sortedPeople[j] <= limit) {
            i += 1; 
        }
        
        j -= 1;
        answer += 1;
    }
    
    return answer;
}