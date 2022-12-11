function solution(numbers) {
    const numbersSumSet = new Set(); 
    
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            numbersSumSet.add(numbers[i] + numbers[j]);    
        }
    }
    
    return [...numbersSumSet].sort((a, b) => a - b);
}