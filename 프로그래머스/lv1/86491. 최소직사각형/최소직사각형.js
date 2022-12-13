function solution(sizes) {
    const maxSize = [0, 0];
    
    sizes.forEach(([width, height]) => {
        if (width < height) {
            [width, height] = [height, width];
        }
        
        maxSize[0] = Math.max(maxSize[0], width)
        maxSize[1] = Math.max(maxSize[1], height)
    })
    
    return maxSize[0] * maxSize[1];
}