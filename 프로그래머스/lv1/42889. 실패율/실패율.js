/**
 * 실패율: 스테이지에는 도달했지만 클라어하지 못한 수 / 스테이지에 도달한 수
 * 시간을 늘려 난이도를 조절
 */

function solution(N, stages) {
    const memo = {};
    const stagesLength = stages.length;
    const arr = Array(N + 1).fill(true);
    arr[0] = false;
    
    for (let i = 0; i < stages.length; i++) {
        // const stage = stages[i] > String(N) ? N : stages[i];
        const stage = stages[i];
        
        if (!memo.hasOwnProperty(stage)) {
            memo[stage] = 0;
            arr[stage] = false;
        }
        
        memo[stage] += 1;    
    }
        
    let totalCount = stagesLength;
    
    for (let stage in memo) {
        const stageCount = memo[stage];
        const rate = stageCount / totalCount;
        
        memo[stage] = stageCount / totalCount

        totalCount -= stageCount
    }
    
    if (memo.hasOwnProperty(N + 1)) {
        delete memo[N + 1];
    }

    const arrFilter = arr.map((value, i) => {
        if (value) {
            return i;
        }
        return undefined
    }).filter(Boolean);
    
    const sortedfailRateList = Object.keys(memo).map(Number).sort((a, b) => memo[b] - memo[a] || a - b); 
    
    
    return [...sortedfailRateList, ...arrFilter];
}