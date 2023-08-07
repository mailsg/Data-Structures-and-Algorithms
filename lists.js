class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.size;
  }
  //   Add at first
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  //   Add at last
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // node value specified
  getNode(index) {
    if (index < 0 || index >= this.size) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  // Search by index
  getAt(index) {
    if (index < 0 || index > this.size) return null;

    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current.value;
  }

  removeFront() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
  }
  removeAtEnd() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
  }

  removeAt(index) {
    if (this.size === 0) {
      this.head = null;
      this.next = null;
    }
    let currentNode = this.head;
    let prevNode = null;
    let count = 0;

    while (count !== index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
    return (prevNode.next = currentNode.next);
  }

  print() {
    if (this.isEmpty()) console.log('List is empty');
    let current = this.head;
    let cout = 0;
    while (current !== this.tail.next) {
      console.log(current.value);
      current = current.next;
      cout++;
    }
  }
  getSize() {
    return this.size;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

const list = new LinkedList();

list.append(3);
list.append(10);
list.append(106);
// list.append(1065);
// list.append(15);
// list.clear();
list.removeAt(2);
list.print();

// console.log(list.getSize());
// console.log(list);
