function solution(name, yearning, photo) {
    const score = {};
    for (let i = 0; i < name.length; i++) {
        score[name[i]] = yearning[i];
    }
    
    const result = photo.reduce((acc, cur) => {
        const sum = cur.reduce((acc, cur) => {
            return acc + (score[cur] || 0)
        }, 0);
        
        
        return [...acc, sum];
    }, [])
    
    
    return result;
}