function solution(myStr) {
    const answer = myStr.split(/[abc]+/g).filter(str => str.length !== 0);
    
    return answer.length === 0 ?  ["EMPTY"] : answer;
}