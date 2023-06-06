function solution(arr, k) {
    let answer = [];
    
    for (const num of arr) {
        if (!answer.includes(num)){
            answer.push(num);
            
            if (answer.length === k) {
                break;
            } 
        }
    }
    
    
    
    if (answer.length < k) {
        answer = answer.concat(Array(k - answer.length).fill(-1));
    } 
    
    return answer;
}