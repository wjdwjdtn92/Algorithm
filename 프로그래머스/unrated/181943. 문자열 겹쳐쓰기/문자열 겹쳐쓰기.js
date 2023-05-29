function solution(my_string, overwrite_string, s) {
    const preString = my_string.slice(0, s);
    const endString = my_string.slice(overwrite_string.length + s);
    
    return preString + overwrite_string + endString;
}