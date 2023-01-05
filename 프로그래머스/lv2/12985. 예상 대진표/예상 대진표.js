function solution(n,a,b){
    let round = 0;
    let aPostion = a;
    let bPostion = b;
    
     
    while (aPostion !== bPostion) {
        aPostion = Math.ceil(aPostion / 2);
        bPostion = Math.ceil(bPostion / 2);
        round += 1;
    }

    return round;
}