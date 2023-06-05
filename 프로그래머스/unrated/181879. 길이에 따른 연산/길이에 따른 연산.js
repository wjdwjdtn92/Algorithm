function add(acc, cur) {
    return acc + cur
}

function mul(acc, cur) {
    return acc * cur;
}

function solution(num_list) {
    if (num_list.length > 10) {
        return num_list.reduce(add, 0);
    }
    
    return num_list.reduce(mul, 1);
}