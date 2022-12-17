function solution(numbers, hand) {
    var answer = '';
    const keypad = {
        "1": [0, 0], "2": [0, 1], "3": [0, 2],
        "4": [1, 0], "5": [1, 1], "6": [1, 2],
        "7": [2, 0], "8": [2, 1], "9": [2, 2],
        "*": [3, 0], "0": [3, 1], "#": [3, 2],
    }
    const handLocation = ["*", "#"];
    
    function getDistance(point1, point2) {
        return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
    }
    
    function isLeftHand (keyLocation, handLocation, hand) {
        const leftHandDistance = getDistance(keyLocation, keypad[handLocation[0]]);
        const rightHandDistance = getDistance(keyLocation, keypad[handLocation[1]]);
        
        if (keyLocation[1] === 0) {
            return true;
        }
        
        if (keyLocation[1] === 2) {
            return false;
        }
        
        if (leftHandDistance < rightHandDistance) {
            return true;
        }
        
        if (leftHandDistance > rightHandDistance) {
            return false;
        }
        
        if (hand === "left") {
            return true
        }
        
        return false
    }
    
    for (let i = 0; i < numbers.length; i++) {
        const keyLocation = keypad[numbers[i]];

        if (isLeftHand(keyLocation, handLocation, hand)) {
            handLocation[0] = numbers[i];
            answer += "L"
        } else {
            handLocation[1] = numbers[i];
            answer += "R"
        }
    }
    
    return answer;
}