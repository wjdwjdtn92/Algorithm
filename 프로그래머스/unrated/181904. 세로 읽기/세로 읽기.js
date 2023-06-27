function solution(my_string, m, c) {
    const length = my_string.length;
    let index = c - 1;
    let answer = '';
    
    while(index < length) {
        answer += my_string[index];
        index += m
    }
        
    return answer;
}