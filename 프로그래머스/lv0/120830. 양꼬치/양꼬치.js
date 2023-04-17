/*
 * 10인분 먹으면 음료수 1개 꽁짜
 * 양꼬치 1인분 12,000
 * 음료수 2000원
 * n -> 양꼬치, K -> 음료수
 **/
function solution(n, k) {
    let answer = 0;
    const lambSkewerPrice = 12000;
    const drinkPrice = 2000;
    const freeDrinkAmount = parseInt(n / 10, 10);
    let drinkAmount = k - freeDrinkAmount;
    
    if (drinkAmount < 0) {
        drinkAmount = 0;    
    }

    answer = (n * lambSkewerPrice) + (drinkAmount * drinkPrice);
    
    return answer;
}