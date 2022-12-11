function solution(id_list, report, k) {
    var answer = [];
    const memo = id_list.reduce((acc, cur) => {
        acc[cur] = 0
        return acc;
    }, {})
    const reportMemo = {}
    
    const uniqueReport = [...new Set(report)] 
    
    const reportSpilt = uniqueReport.map(ids => {
        const idList = ids.split(" ");
        return [idList[0], idList[1]];
    })
    
    reportSpilt.forEach(report => {
        reportMemo[report[1]] = reportMemo[report[1]] ? reportMemo[report[1]] + 1 : 1;
    })
    
    reportSpilt.forEach(report => {
        if (reportMemo[report[1]] >= k) {
             memo[report[0]] += 1;
        }
    })
    
    return Object.values(memo);
}