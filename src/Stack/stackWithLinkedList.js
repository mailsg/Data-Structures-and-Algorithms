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

  append(value) {
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

  removeLast() {
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
  myStack.append(5);
  myStack.append(4);
  myStack.append(3);
  myStack.removeLast();
  console.log(myStack);
  console.log(myStack.peek());
  console.log(myStack.isEmpty());
  */
