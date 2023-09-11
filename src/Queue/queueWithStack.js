/*eslint-disable*/
// Code 1
class Queue {
  //FIFO
  constructor() {
    this.enqueueArr = [];
    this.dequeueArr = [];
  }

  enqueue(value) {
    this.enqueueArr.push(value);
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    while (this.enqueueArr.length > 0) {
      this.dequeueArr.push(this.enqueueArr.pop());
    }
    return this.dequeueArr.pop();
  }
  isEmpty() {
    return this.enqueueArr.length == 0 && this.dequeueArr.length === 0;
  }
  size() {
    return this.enqueueArr.length + this.dequeueArr.length;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    while (this.enqueueArr.length > 0) {
      this.dequeueArr.push(this.enqueueArr.pop());
    }
    return this.dequeueArr[this.dequeueArr.length - 1];
    // this.enqueueArr.length - 1;
  }
}

//Code 2
class QueueWithStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(item) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(item);

    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.length === 0) {
      return null; // Queue is empty
    }
    return this.stack1.pop();
  }
  peek() {
    return this.stack1[this.stack1.length - 1];
  }
  isEmpty() {
    return this.stack1.length === 0;
  }
  size() {
    return this.stack1.length;
  }
}
