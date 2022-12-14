function solution(a, b) {
    const weekString = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    const dayOfWeekNum = new Date(`2016.${a}.${b}`).getDay();
    
    return weekString[dayOfWeekNum];
}