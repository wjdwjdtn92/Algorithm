function solution(start, end) {
    const answer = Array.from({length: start - end + 1}, (_, index) => start - index);
    
    return answer;
}