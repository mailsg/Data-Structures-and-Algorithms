/* eslint-disable camelcase, no-plusplus, max-classes-per-file */
class Node {
  constructor(value, next_node = null) {
    this.value = null;
    this.next_node = next_node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(number) {
    const newNode = new Node(number);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next_node = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  get(index) {
    const node = this.get_node(index);
    return node ? node.value : null;
  }

  get_node(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next_node;
    }
    return current;
  }

  addAt(index, number) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      const newNode = new Node(number, this.head);
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else if (index === this.size) {
      this.add(number);
    } else {
      const prev_node = this.get_node(index - 1);
      const new_node = new Node(number, prev_node.next_node);
      prev_node.next_node = new_node;
    }
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next_node;
      if (!this.head) {
        this.tail = null;
      }
    } else {
      const prev_node = this.get_node(index - 1);
      prev_node.next_node = prev_node.next_node.next_node;
      if (!prev_node.next_node) {
        this.tail = prev_node;
      }
    }
    this.length--;
  }
}

module.exports = LinkedList;
