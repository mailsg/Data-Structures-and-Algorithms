/* eslint-disable camelcase, no-plusplus, max-classes-per-file */
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(item) {
    const newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next_node = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  get_node(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next_node;
    }
    return current; // return current !== null ? current.value : null;
  }

  addAt(index, item) {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      const newNode = new Node(item, this.head);
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else if (index === this.size) {
      this.add(item);
    } else {
      const prev_node = this.get_node(index - 1);
      const new_node = new Node(item, prev_node.next_node);
      prev_node.next_node = new_node;
    }
    this.size++;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
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
    this.size--;
  }
}

module.exports = LinkedList;
