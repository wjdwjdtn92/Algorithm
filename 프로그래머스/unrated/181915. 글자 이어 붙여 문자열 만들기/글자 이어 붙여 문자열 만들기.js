function solution(my_string, index_list) {
    const answer = index_list.reduce((acc, index) => {
        return acc + my_string[index];
    }, '');
    
    return answer;
}