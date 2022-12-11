/*
 * 문자열 길이 4 또는 6
 * 숫자로만 구성여부 판단
 */
function solution(s) {    
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    return [...s].filter(isNaN).length === 0;
}