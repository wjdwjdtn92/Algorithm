function solution(strings, n) {
    const sortStrings = strings.sort((a,b) => {
        if (a[n] > b[n]) {
            return 1;
        }
        
        if (a[n] < b[n]) {
            return -1;
        }
        
        if (a < b) {
            return -1;
        };
        
        return 0;
    });
    
    return strings.sort((a,b) => a[n] > b[n]);;
}