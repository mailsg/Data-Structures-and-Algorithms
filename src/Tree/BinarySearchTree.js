/*eslint-disable*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root; // currentNode variable is created to traverse the tree.

      while (true) {
        if (value < currentNode.value) {
          // Go left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Go right, for value greater than or equal.
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }

    return false;
  }

  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (!node) {
      return null;
    }

    let nodeValue = node.value; // Store the value of the current node

    if (value < nodeValue) {
      node.left = this._removeNode(node.left, value);
    } else if (value > nodeValue) {
      node.right = this._removeNode(node.right, value);
    } else {
      if (!node.left) {
        return node.right;
      } if (!node.right) {
        return node.left;
      }

      const minRightSubtree = this._findMin(node.right);
      nodeValue = minRightSubtree.value; // Update the value of the current node
      node.right = this._removeNode(node.right, minRightSubtree.value);
    }
    return node;
  }

  _findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  traverse(node) {
    if (node === null) {
      return null;
    }

    const tree = {
      value: node.value,
      left: this.traverse(node.left),
      right: this.traverse(node.right),
    };

    return tree;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
console.log(tree.traverse(tree.root));
