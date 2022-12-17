function solution(babbling) {
    const regex = new RegExp("(aya|ye|woo|ma)", "g");
    const regexTwice = new RegExp("(ayaaya|yeye|woowoo|mama)", "");
    
    return babbling.reduce((acc, cur) => { 
        if (regexTwice.test(cur)) {
            return acc;
        }
        
        return cur.replace(regex, "").length === 0 ? acc + 1 : acc;
    }, 0)
}