function solution(food) {
    var answer = '';
    
    for (let i = 1; i < food.length; i++) {
        const foodAmount = parseInt(food[i] / 2, 10);
        
        answer += String(i).repeat(foodAmount);
    }
    
    return answer + '0' + [...answer].reverse().join('');
}