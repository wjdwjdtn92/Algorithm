/*
 * 사람 수 n
 * 피자 1개 -> 7조각
 * 모든사람 1조각 이상
 **/

function solution(n) {
    const pizzaSlicesAmmout = 7;
    
    return Math.ceil(n / pizzaSlicesAmmout);
}