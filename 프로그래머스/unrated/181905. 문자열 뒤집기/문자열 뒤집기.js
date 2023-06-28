function solution(my_string, s, e) {
    const result = [...my_string]
    result.splice(s, e - s + 1, ...result.slice(s, e + 1).reverse());
    
    return result.join('');
}