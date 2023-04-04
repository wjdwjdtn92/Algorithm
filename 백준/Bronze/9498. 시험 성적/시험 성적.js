const fs = require('fs');
const scoreString = fs.readFileSync('/dev/stdin').toString().trim();
const score = Number(scoreString);

const getGrade = (score) => {
    if (score >= 90 && score <= 100) {
        return 'A';
    }
    
    if (score >= 80) {
        return 'B';
    }
    
    if (score >= 70) {
        return 'C';
    }
    
    if (score >= 60) {
        return 'D';
    }
    
    return 'F';
}

console.log(getGrade(score));