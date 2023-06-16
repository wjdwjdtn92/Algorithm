function solution(my_string, is_suffix) {
    const sliceString = my_string.slice(-is_suffix.length);
    
    return sliceString === is_suffix ? 1 : 0;
}