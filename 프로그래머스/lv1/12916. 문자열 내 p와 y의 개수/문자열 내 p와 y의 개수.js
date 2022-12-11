function solution(s){
    const sToUppercase = s.toUpperCase();
    const countP= [...sToUppercase].filter(el => el === "P").length;
    const countY= [...sToUppercase].filter(el => el === "Y").length;
    
    if (countP === countY) {
        return true;
    }

    return false;
}