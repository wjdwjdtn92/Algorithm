/*
 * 50보다 크거나 같은 짝수 => 2로 나누기
 * 50보다 작은 홀수 => 2곱하고 1더하기
 */

function solution(arr) {
    var answer = 0;
    let isChange = true;
    let count = 0;
    
    while(isChange) {
        isChange = false;
        count += 1;
        
        arr = arr.map((value) => {
            if (value >= 50 && value % 2 === 0) {
                isChange = true;
                return value / 2;
            } else if (value < 50 && value % 2 !== 0) {
                isChange = true;
                return value * 2 + 1;
            } else {
                return value;    
            }
        }); 
    }
    
    return count - 1;
}