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

  dfs(startVertex, visited = {}) {
    visited[startVertex] = true;
    console.log(startVertex);

    for (const neighbor of this.vertices[startVertex]) {
      // console.log('Neigbor:',neighbor)
      if (!visited[neighbor]) {
        this.dfs(neighbor, visited);
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
