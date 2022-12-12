function solution(num) {
    const MAX_LOOP_COUNT = 500;
    let loop_count = 1;
    
    if (num === 1) {
        return 0;
    }
    
    while(loop_count <=  MAX_LOOP_COUNT) {
        if (num / 2 === 1) {
            return loop_count;
        }
        
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;    
        }
        
        loop_count += 1;
    }
    
    return -1;
}