function get_prime(num) {
    const prime = [false, false, ...Array(num - 1).fill(true)];
    
    for (let i = 2; i * i <= num; i++) {
        if(prime[i]) {
            for (let j = i * 2; j <= num; j += i) {
                prime[j] = false;
            }
        }
    }
    
    return prime;
}


function solution(nums) {
    var answer = 0;
    const memo = []
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                memo.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    
    const maxNum = Math.max(...memo);
    const primsList = get_prime(maxNum);
    
    memo.forEach(el => {
        if (primsList[el]) {
            answer += 1;
        }
    })
    
    return answer;
}