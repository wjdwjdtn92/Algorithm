function solution(myString, pat) {
    if (myString.length < pat.length) {
        return 0;
    }
    
    const convertMyString = [...myString].map((string) => {
        if (string === "A") {
            return "B";
        }
        return "A";
    }).join('');
    const isInculdes = convertMyString.includes(pat);
    
    
    return isInculdes ? 1 : 0;
}