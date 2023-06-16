function solution(arr) {
    var answer = [];
    return arr.map((number) => {
        if (number >= 50 && number % 2 === 0) {
            return number / 2;
        }
        
        if (number < 50 && number % 2 !== 0) {
            return number * 2;
        }
        
        return number;
    });
}