import { convertToIndex, convertToPolar, getAdjacencyList } from "./ultis";

const numberVertex = 8 * 8;
export class Graph {
  // Save all visited object in to a adjacecy list
  constructor() {
    this.list = new Map();

  }
  addEdge(vertexIndex, adjNode) {
    this.list.set(vertexIndex, adjNode);
  }
  addAdjacency(vertexIndex) {
    let adjList = getAdjacencyList(convertToPolar(vertexIndex));
    this.list.set(vertexIndex, adjList);
  }

  print() {
    console.log(this.list.entries());
  }

  forEach(callback) {
    this.list.forEach((key, value) => {
      callback(value, key);
    });
  }
}
