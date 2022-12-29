function solution(cacheSize, cities) {
    let answer = 5;
    const CACHE_HIT = 1;
    const CACHE_MISS = 5;
    
    if (cacheSize === 0) {
        return cities.length * CACHE_MISS;
    }
    
    const cache = [cities[0].toLowerCase()];
    
    for (let i = 1; i < cities.length; i++) {
        const city = cities[i].toLowerCase();
        let findIndex = cache.indexOf(city);
        
        if (findIndex === -1) {
            answer += CACHE_MISS;
        } else {
            answer += CACHE_HIT;    
        }
        
        if (cache.length >= cacheSize) {
            findIndex = findIndex === -1 ? 0 : findIndex
            cache.splice(findIndex, 1)
        }
        
        cache.push(city);
    }
    
    return answer;
}