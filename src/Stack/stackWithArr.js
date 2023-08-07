// Using arrays
class MyStack {
  constructor() {
    this.stack = new Array();
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    this.stack.push(value);
    this.bottom = this.stack[0];
    this.top = this.stack[this.stack.length - 1];
    this.length++;
    return this;
  }

  pop() {
    this.stack.pop();
    this.bottom = this.stack[0];
    this.top = this.stack[this.stack.length - 1];
    this.length--;
    return this;
  }
}

const stack = new MyStack();
stack.push(5);
stack.push(4);
stack.push(3);
stack.pop();
console.log(stack);
