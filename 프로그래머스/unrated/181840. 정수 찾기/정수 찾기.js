function solution(num_list, n) {
    const isInclude = num_list.includes(n);
    return isInclude ? 1 : 0;
}