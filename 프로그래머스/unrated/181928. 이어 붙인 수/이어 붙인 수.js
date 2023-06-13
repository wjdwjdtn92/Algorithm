function solution(num_list) {
    const [odd, even] = num_list.reduce((acc, cur) => {
        if (cur % 2 !== 0) {
            acc[0] += cur;
        } else {
            acc[1] += cur;
        }
        
        return acc;
    }, ["", ""]);
    
    return Number(odd) + Number(even);
}