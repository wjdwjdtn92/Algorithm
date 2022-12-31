class Queue {
	constructor() {
		this.queue = [];
		this.front = 0;
		this.rear = 0;
	}

	enqueue(value) {
		this.queue[this.rear++] = value; 
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

function solution(priorities, location) {
    var answer = 0;
    const sortedArr = [...priorities].sort((a, b) => b - a);
    const prioritiesArr = priorities.map((el, index) => [el, index]);
    const queue = new Queue();
    
    prioritiesArr.forEach(el => {
        queue.enqueue(el);
    })
    
    let i = 0;
    
    while (queue.size() > 0) {
        const currentPrioritie = queue.dequeue();
        
        if (sortedArr[i] !== currentPrioritie[0]) {
            queue.enqueue(currentPrioritie);
            continue;
        }
        
        if (currentPrioritie[1] === location) {
            return i + 1;
        }
        
        i += 1;
    }
    
    return -1;
}