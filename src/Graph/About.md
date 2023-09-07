# Graph Data Structure

A **graph** is a versatile data structure used to represent relationships between objects. It consists of nodes (vertices) and edges (connections).

## Types of Graphs

1. **Undirected Graph:**
   - Nodes connected by edges without a direction.
   - Visual representation: 
     ```
        A -- B
        |    |
        C -- D
     ```
   - The number of edges in an undirected graph is always even.

2. **Directed Graph (Digraph):**
   - Edges have a direction from one node to another.
   - Visual representation:
     ```
        A --> B
        |     |
        v     v
        C --> D
     ```
   - In a directed graph, edges have a starting node and an ending node.

3. **Weighted Graph:**
   - Edges have weights or costs.
   - Visual representation:
     ```
        A --(3)-- B
        |        |
        (2)      (5)
        |        |
        v        v
        C --(1)-- D
     ```
   - Weighted graphs are used to represent distances, costs, or priorities.

## Key Concepts

- **Node (Vertex):** Represents an entity or object.
- **Edge:** Connects two nodes, showing a relationship.
- **Adjacent:** Two nodes connected by an edge.
- **Path:** A sequence of edges connecting nodes.
- **Cycle:** A path that starts and ends at the same node.

## Theoretical Concepts

- **Connectivity:** A graph is **connected** if there is a path between any two nodes.
- **Degree:** The **degree** of a node is the number of edges connected to it.
- **Acyclic Graph:** A graph without cycles is called an **acyclic graph**.
- **Connected Components:** In a graph, **connected components** are subgraphs where each node is reachable from any other node within the subgraph.
- **Graph Traversal Algorithms:** Algorithms like Depth-First Search (DFS) and Breadth-First Search (BFS) are used to explore graphs.
- **Graph Representations:** Graphs can be represented using **adjacency matrices** or **adjacency lists**, depending on the application.

## Applications

- Social networks (nodes as users, edges as friendships).
- Maps (nodes as locations, edges as roads).
- Recommendations (nodes as products, edges as user preferences).
- Network routing (nodes as routers, edges as connections).

Graphs are fundamental in solving real-world problems, making them an essential data structure to understand.