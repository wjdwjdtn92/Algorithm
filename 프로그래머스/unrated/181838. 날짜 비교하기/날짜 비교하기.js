function solution(date1, date2) {
    if (Number(date1.join("")) < Number(date2.join(""))) {
        return 1;
    }
    
    return 0;
}