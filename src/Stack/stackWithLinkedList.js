/*eslint-disable*/
// Stacks using Linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}
/*
  const myStack = new Stack();
  myStack.push(5);
  myStack.push(4);
  myStack.push(3);
  myStack.pop();
  console.log(myStack);
  console.log(myStack.peek());
  console.log(myStack.isEmpty());
  */
