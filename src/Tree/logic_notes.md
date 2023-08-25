# Tree Terminologies

In the context of computer science and data structures, a **tree** is a hierarchical data structure that consists of nodes connected by edges. Each tree has several important terms associated with it:

- **Parent**: A node that immediately precedes another node.
- **Child**: A node that immediately succeeds another node.
- **Root**: The topmost node in a tree, serving as its starting point.
- **Leaf**: A node without any children.
- **Siblings**: Nodes that share the same parent.
- **Ancestor**: A node's parent's parent (going up the hierarchy).
- **Path**: A sequence of nodes and edges connecting one node to another.
- **Degree**: The number of child elements a node has.

## Binary Tree

A **binary tree** is a type of tree where each node can have at most two children, often referred to as the left child and the right child. Binary trees have specific rules regarding the values in their nodes:

1. The value of each node in the **left** subtree must be **smaller** than the value of its parent node.
2. The value of each node in the **right** subtree must be **greater** than the value of its parent node.

Binary trees support various operations:

- **Insertion**: Adding a new node to the tree while maintaining the binary tree properties.
- **Search**: Finding a node within the tree, if it exists.
- **Traversal**: Visiting all nodes in the tree. This can be done using different methods such as Depth-First Search (DFS) and Breadth-First Search (BFS).
- **Deletion**: Removing a node from the tree.

## Usage

Trees, including binary trees, have versatile applications, including:

- Searching and sorting algorithms.
- Implementing abstract data types like lookup tables and priority queues.

## Note

Before delving into these operations, it's important to understand recursion as it simplifies the process, which is crucial for later implementations.

## Traversal

Traversal involves visiting every node in the tree. Unlike linear data structures, hierarchical data structures like trees can be traversed in multiple ways. There are two main traversal methods:

1. **Depth-First Search (DFS)**: This algorithm starts at the root node and explores as far as possible along each branch before backtracking. There are three types of DFS Traversal:

   - **Preorder**: Read the data of the current node, visit the left subtree, and then visit the right subtree recursively.
   - **Inorder**: Visit the left subtree, read the data of the current node, and then visit the right subtree recursively.
   - **Postorder**: Visit the left subtree, visit the right subtree, and then read the data of the current node recursively.

2. **Breadth-First Search (BFS)**: This approach explores all nodes at the present depth before moving on to nodes at the next depth level. It visits nodes level by level:
   1. Create a queue.
   2. Enqueue the root node.
   3. While nodes exist in the queue:
      - Dequeue the node from the front.
      - Read the node's value.
      - Enqueue the node's left child if it exists.
      - Enqueue the node's right child if it exists.

## Removal/Deletion

For deletion in a binary tree:

1. When the node to be deleted is a leaf node, simply remove it from the tree.
2. When the node to be deleted has one child, remove the node and replace it with its child.
3. When the node to be deleted has two children, copy the value of the in-order successor to the node and then delete the in-order successor.

The in-order successor of a node in a binary search tree is the next node in the in-order traversal sequence. In a binary tree, the in-order successor is the node with the smallest value in its right subtree.
