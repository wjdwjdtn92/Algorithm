function solution(price, money, count) {
    var answer = -1;
    const sum = count * (count + 1) / 2
    const totalPrice = sum * price;
    
    answer = money > totalPrice ? 0 : totalPrice - money

    return  answer;
}