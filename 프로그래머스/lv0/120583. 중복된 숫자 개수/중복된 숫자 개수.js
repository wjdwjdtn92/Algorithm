// array에 n이 몇 개 있는 지
function solution(array, n) {
    const findArray = array.filter(item => item === n);
    
    return findArray.length;
}