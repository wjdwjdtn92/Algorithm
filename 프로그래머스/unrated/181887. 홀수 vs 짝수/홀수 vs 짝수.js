function solution(num_list) {
    const sumArray = num_list.reduce((acc, number, index) => {
        if (index % 2 === 0 ){
            acc[0] += number;
        } else {
             acc[1] += number;
        }
        
        return acc;
    }, [0, 0]);
    
    return Math.max(...sumArray);
}