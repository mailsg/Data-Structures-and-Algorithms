/* eslint-disable camelcase, no-plusplus, max-classes-per-file */
class Node {
    constructor(value, next_node){
        this.value = value;
        this.next_node = next_node;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        return this.isEmpty() ? null : this.front.value;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next_node = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if(this.isEmpty()){
            return null;
        }
        if(this.size === 1){
            this.rear = null;
        }
        const holdingPointer = this.front;
        this.front = this.front.next_node;
        this.size--;
        return holdingPointer.value;
    }

    printQueue() {
        let current = this.front;
        let elements = [];
        while(current !== null){
            elements.push(current.value);
            current = current.next_node;
        }
        console.log(elements.join('->'));
    }
}

// Example usage of the Queue class
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.printQueue(); // Output: 10 -> 20 -> 30
console.log(queue.peek()); // Output: 10
queue.dequeue();
queue.printQueue(); // Output: 20 -> 30
console.log(queue.getSize()); // Output: 2














