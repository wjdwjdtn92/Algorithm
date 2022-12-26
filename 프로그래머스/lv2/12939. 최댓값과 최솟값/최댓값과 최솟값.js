function solution(s) {
    var answer = '';
    const nums = s.split(" ");
    let max = -Infinity;
    let min = Infinity;
    
    for (let num of nums) {
        num = Number(num)
        
        if ( max < num ) {
            max = num;
        }
        
        if ( min > num ) {
            min = num;
        }
    }
    
    return `${min} ${max}`;
}