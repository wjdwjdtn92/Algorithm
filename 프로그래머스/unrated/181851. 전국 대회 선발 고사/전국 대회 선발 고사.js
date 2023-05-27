function solution(rank, attendance) {
    const rankAndAttendance = rank.reduce((acc, cur, index) => {
        if (attendance[index]) {
            acc.push([cur, index]);
        }
        return acc;
    }, []);
    const sortRank = rankAndAttendance.sort((a, b) => a[0] - b[0]);
    
    return  10000 * sortRank[0][1] + 100 * sortRank[1][1] + sortRank[2][1];
}