/*eslint-disable*/
// Using arrays
class MyStack {
  constructor() {
    this.stack = new Array();
    this.top = undefined;
    this.bottom = undefined;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  append(value) {
    this.stack.push(value);
    this.bottom = this.stack[0];
    this.top = this.stack[this.stack.length - 1];
    this.length++;
    return this;
  }

  removeLast() {
    this.stack.pop();
    this.bottom = this.stack[0];
    this.top = this.stack[this.stack.length - 1];
    this.length--;
    return this;
  }
}

const stack = new MyStack();
stack.append(5);
stack.append(4);
stack.append(3);
stack.removeLast();
console.log(stack);
