function solution(myString, pat) {
    const regex = new RegExp(`.*(${pat})+`)
    const match = [...myString.match(regex)];
    
    return match[0];
}