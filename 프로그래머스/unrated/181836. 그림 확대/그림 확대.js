function solution(picture, k) {
    const result = [];
    
    picture.forEach(values => {
        const newValue = [...values].map((value) => {
            return value.repeat(k);
        }).join("");
        
        
        for (let i = 0; i < k; i++) {
            result.push(newValue);    
        }
    })
    
    return result;
}