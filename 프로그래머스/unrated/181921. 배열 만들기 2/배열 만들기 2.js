// l이상 r이하의 0과 5로만 이루어진 수
// 이진 1부터 => 문자열 => 숫자 * 5
// 시작점을 찾는 가장 빠른 방법은? ? ?  ? ? ?  ? ? ?  ? 

function solution(l, r) {
    const result = [];
    let num = 1;
    let binaryNum = num.toString(2); 
    let currentNum = binaryNum * 5;
    
    while(currentNum <= r) {
        if (currentNum >= l) {
            result.push(currentNum);
        }
        
        num += 1;
        binaryNum = num.toString(2); 
        currentNum = binaryNum * 5;
    }
    
    if (result.length === 0) {
        return [-1];
    }
    
    return result;
}