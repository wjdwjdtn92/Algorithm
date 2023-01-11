function solution(n) {
    var answer = '';
    const oneTwoFour = "124";
    const length = oneTwoFour.length;
    
    while(n > 0) {
        const remainder = n % length;
        
        if (remainder === 0) {
            answer = oneTwoFour[2] + answer;
            n = parseInt(n / length) - 1;
        } else {
            answer = oneTwoFour[remainder - 1] + answer;
            n = parseInt(n / length);
        }
    }
    
    return answer;
}