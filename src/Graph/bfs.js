/*eslint-disable*/
class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1); // For an undirected graph
  }
  bfs(startVertex) {
    const visited = {};
    const queue = [];

    visited[startVertex] = true;
    queue.push(startVertex);

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);

      for (const neighbor of this.vertices[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
}

// Example usage:
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
