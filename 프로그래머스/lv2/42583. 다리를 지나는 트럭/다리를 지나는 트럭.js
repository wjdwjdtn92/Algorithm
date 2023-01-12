class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this.weight = 0;
    }
    
    enqueue(value) {
        this.queue[this.rear] = value;
        this.rear += 1;
        this.weight += value;
    }
    
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        this.weight -= value;
        
        return value;
    }
    
    size() {
        return this.rear - this.front;
    }
    
    peek() {
        return this.queue[this.front];
    }
}

function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const bridgeQueue = new Queue();
    const truckQueue = new Queue();
    
    for (const truck_weight of truck_weights) {
        truckQueue.enqueue(truck_weight);
    }
    
    while (truckQueue.size() > 0) {
        time += 1;
        
        if (bridgeQueue.size() === 0) {
            bridgeQueue.enqueue(truckQueue.dequeue());
            continue;
        }
        
        if (bridgeQueue.size() === bridge_length) {
            bridgeQueue.dequeue();
        }
        
        const peek = bridgeQueue.peek();
        
        if (bridgeQueue.weight + truckQueue.peek() > weight) {
            bridgeQueue.enqueue(0);
        } else {
            bridgeQueue.enqueue(truckQueue.dequeue());
        }
    }
    
    if (bridgeQueue.size() > 0) {
        time += bridge_length
    }
    
    return time;
}