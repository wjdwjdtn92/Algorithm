function solution(my_strings, parts) {
    return parts.reduce((acc, [s, e], index) => {
        acc += my_strings[index].slice(s, e + 1);
        
        return acc;
    }, '');
}