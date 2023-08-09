# Stack Data Structure

A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. The last element added to the stack is the first one to be removed.

## Operations

The fundamental operations associated with a stack are:

- `push(element)`: Adds an element to the top of the stack.
- `pop()`: Removes the top element from the stack and returns it.
- `peek()`: Retrieves the top element without removing it.
- `isEmpty()`: Checks if the stack is empty and returns a boolean value.
- `size()`: Returns the number of elements in the stack.

## Why use a Stack:

- LIFO Behavior: Stacks are useful when you need to maintain a collection of elements with Last In, First Out (LIFO) behavior. It means the last element added to the stack is the first one to be removed, which is beneficial in certain scenarios.

- Function Call Management: Stacks are used in programming languages to manage function calls and their execution. When a function is called, its context is pushed onto the call stack, and when the function returns, its context is popped off the stack.

- Memory Management: Stacks play a crucial role in memory management. They are used to store data and control flow during program execution, especially in low-level languages like assembly or embedded systems.

- Parsing and Expression Evaluation: Stacks are helpful for parsing and evaluating expressions, such as infix to postfix conversion, or for implementing a calculator that can evaluate mathematical expressions efficiently.

## When to use a Stack:

**You should consider using a stack in the following situations**:

- Reversing Order: When you need to reverse the order of elements, a stack can be used to achieve this efficiently.

- Parsing and Expression Evaluation: If you're dealing with parsing expressions (e.g., arithmetic expressions) or evaluating their results, a stack-based approach simplifies the process.

- Undo/Redo Functionality: Implementing undo and redo features in applications often involves using a stack to store the history of actions.

- Backtracking Algorithms: Many backtracking algorithms, like depth-first search (DFS), can be efficiently implemented using a stack to manage the search path.

## When not to use Stack

- Need for Random Access: Stacks don't support random access to elements, limiting access to the topmost element only.

- Limited Capacity: Stacks have fixed capacity, unsuitable for dynamic data needs.

- Complexity Analysis: Certain algorithms with stacks might have suboptimal time complexity for specific operations.

- Performance Overhead: Frequent insertions and deletions at arbitrary positions can introduce unnecessary overhead.

- Memory Management: Stacks can lead to memory issues in deeply nested or recursive scenarios.

- Not Suitable for All Algorithms: Some problems are better solved using other data structures like queues, trees, or graphs.

- Performance Trade-offs: Stacks may result in suboptimal space or time complexity based on the problem requirements.

## Real-life examples

1. **Call Stack in Programming**: When a function is called, its execution context is pushed onto the call stack

2. **Undo/Redo Functionality in Applications**: Many applications, such as text editors, graphics software, and document editors, implement undo and redo functionality using a stack.

3. **Web Browsing History**:Web browsers use a stack to keep track of the browsing history.

4. **Expression Evaluation (Infix to Postfix)**: Stacks are used to evaluate expressions, such as arithmetic expressions.

5. **Backtracking Algorithms (DFS)**: Depth-First Search (DFS), a common backtracking algorithm, uses a stack to keep track of nodes in a graph to explore deeper before backtracking to previous nodes.

6. **Balancing Symbols (Parentheses, Brackets)**: Stacks are used to check for balanced symbols in code, such as parentheses, brackets, and curly braces.

7. **Function Call History (Debugging Tools)**: Some software tools, like debugging tools, use stacks to maintain a history of function calls and their parameters.

8. **Plate Stacking**:In a real-life scenario, stacking plates on top of each other is similar to using a stack data structure. You add plates on the top of the stack, and when you want to take a plate, you remove it from the top.

## Implementation

In JavaScript, we can implement a stack using an array. Here's a simple example:

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
    return null;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
```

## Example usage

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20

console.log(stack.size()); // Output: 1
console.log(stack.isEmpty()); // Output: false

console.log(stack.pop()); // Output: 10
console.log(stack.isEmpty()); // Output: true
