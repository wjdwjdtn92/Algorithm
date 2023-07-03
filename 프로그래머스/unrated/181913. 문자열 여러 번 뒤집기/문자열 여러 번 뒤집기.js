function solution(my_string, queries) {
    let newString = my_string;
    
    queries.forEach(([s, e]) => {
        newString = newString.slice(0, s) 
            + newString.slice(s, e + 1).split('').reverse().join('')
            + newString.slice(e + 1);
    });
    
    return newString;
}