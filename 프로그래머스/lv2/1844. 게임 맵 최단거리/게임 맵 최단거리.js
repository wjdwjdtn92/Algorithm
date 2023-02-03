/*
 * maps: n * m (1이상 100이하) / 둘다 1인경우는 없음
 * 시작: 0, 0 / 끝 n, m
 * 도달하지 못하는 엣지케이스 존재 -1 반환
 * 갈 수 있는 길을 넣고 판별하기 // 방향은 무조건 오른쪽으로? 방문표시?
 * queue
 * 갈수 있는 방향 [0, -1] [0, 1] [1, 0] [-1, 0]
 **/

class Queue {
	constructor() {
		this.queue = [];
		this.front = 0;
		this.rear = 0;
	}

	enqueue(value) {
		this.queue[this.rear] = value; 
        this.rear += 1;
	}

	dequeue() {
		const value = this.queue[this.front];
		delete this.queue[this.front];
		this.front += 1;
		return value;
	}

	peek() {
		return this.queue[this.front];
	}

	size() {
		return this.rear - this.front;
	}
}


function solution(maps) {
    const MAPS_MAX_ROW = maps.length - 1;
    const MAPS_MAX_COL = maps[0].length - 1;
    
    if (maps[MAPS_MAX_ROW][MAPS_MAX_COL - 1] === 0 
        && maps[MAPS_MAX_ROW - 1][MAPS_MAX_COL] === 0) {
        return -1;
    }
    
    const DIRECTION = [
        [0, -1], [0, 1], [1, 0], [-1, 0],
    ];
    // +row -row +1 -1
    
    const queue = new Queue();
    queue.enqueue([0, 0, 1]);
    
    while(queue.size() > 0) {
        const [row, col, num] = queue.dequeue();
        
        if (row === MAPS_MAX_ROW &&  col === MAPS_MAX_COL) {
            return num;
        }
        
        for (const [addRow, addCol] of DIRECTION) {
            const checkRow = addRow + row;
            const checkCol = addCol + col;
            
            if (checkRow < 0 || checkCol < 0 ) {
                continue;
            } 
            
            if (checkRow > MAPS_MAX_ROW || checkCol > MAPS_MAX_COL) {
                continue;
            } 
            
            if (maps[checkRow][checkCol] === 0) {
                continue;
            }
            
            if (checkRow === MAPS_MAX_ROW &&  checkCol === MAPS_MAX_COL) {
                return num + 1;
            }
            
            queue.enqueue([checkRow, checkCol, num + 1]);
            maps[checkRow][checkCol] = 0;
        }
    }
    
    return -1;
}