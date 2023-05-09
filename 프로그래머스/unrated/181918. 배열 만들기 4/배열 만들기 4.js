function solution(arr) {
    const stk = [];
    let index = 0;
    const endIndex = arr.length - 1;
    
    while (endIndex >= index ){
        if (stk.length === 0 || stk[stk.length - 1] < arr[index]) {
            stk.push(arr[index]);
            index += 1;
            continue;
        }
        
        stk.pop();
    }
    
    return stk;
}