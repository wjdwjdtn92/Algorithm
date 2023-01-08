function solution(fees, records) {
    const memo = {};
    const [baseTime, baseCost, IntervalTime, IntervalCost] = fees;
    const END_HOUR = "23";
    const END_MINUTE = "59";
    const MINUTE = 60;
    const result = [];
    
    for (const record of records) {
        const [time, car, io] = record.split(" ");
        
        if (!memo[car]) {
            memo[car] = {time, io, totalMinutes: 0};
            continue;
        }
        
        if (io === "OUT") {
            const [hour, minute] = memo[car].time.split(":");
            const [currntHour, crruntMinute] = time.split(":");
            const diffTime = (currntHour - hour) * MINUTE + (crruntMinute - minute);
            
            memo[car].totalMinutes += diffTime;
        }
        

        memo[car].io = io;
        memo[car].time = time;
    }
    
    const cars = Object.keys(memo).sort((a, b) => a - b);
    
    for (const car of cars) {
        let cost = baseCost;
        
        if (memo[car].io === "IN") {
            const [hour, minute] = memo[car].time.split(":");
            memo[car].totalMinutes += ((END_HOUR - hour) * MINUTE + (END_MINUTE - minute));
        }
        
        if (baseTime < memo[car].totalMinutes) {
            const time = memo[car].totalMinutes - baseTime;
            cost += (Math.ceil(time / IntervalTime) * IntervalCost);
        }
        
        result.push(cost);
    }
    
    return result;
}