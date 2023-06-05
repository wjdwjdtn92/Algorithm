function add(acc, cur) {
    return acc + cur;
}

function mul(acc, cur) {
    return acc * cur;
}

function solution(num_list) {
    const sum = num_list.reduce(add, 0);
    const mulResult = num_list.reduce(mul, 1);
    
    return Math.pow(sum, 2) > mulResult ? 1 : 0;
}