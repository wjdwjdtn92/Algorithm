function solution(numbers) {
    var answer = -1;
    let sum = 0;
    
    for (let i = 1; i < 10; i++){
        sum += i;
    }
    
    const numbersSum = numbers.reduce((acc, cur) => {
        return acc + cur;
    }, 0)
    
    return sum - numbersSum;
}