/**
 * 610 106 / 102 210 / 6210
 * 
 */

function solution(numbers) {
    var answer = '';
    const strArr = numbers.map(String).sort((a, b) => {
        return Number(b + a) - Number(a + b);
    });
    
    return strArr.join("").replace(/^0+/g, "0");
}