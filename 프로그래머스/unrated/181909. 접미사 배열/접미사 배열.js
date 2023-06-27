function solution(my_string) {
    const result = [];
    
    for (let i = 0; i < my_string.length; i++) {
        result.push(my_string.slice(my_string.length - i - 1));
    }
    
    return result.sort();
}