import { Graph } from "./Graph";
import { convertToIndex, convertToPolar, getAdjacencyList, mapPathPolar } from "./ultis";

export class KnightTravails {
  constructor(sourceIndex, destIndex) {
    this.source = sourceIndex;
    this.dest = destIndex;
    this.graphPath = new Graph();
    this.queue = [this.source];
    this.visited = Array(8 * 8);
    this.preventEnqueue = false;
  }



  saveGraph() {
    while (this.queue.length > 0) {
      this.travails();
    }
  }
  travails() {
    let node = parseInt(this.queue.shift());

    if (node == null || node == undefined) {
      return;
    }
    else if (node == this.dest) {
      // Not allow to add more node in queue to reach the end of BFS
      this.preventEnqueue = true;
      // Not clear the queue cuz i want to search for all the path have the same
      // cost of movement
      // this.queue = [];
      return;
    }
    // If node is already visited => don't need to move to search for
    // this path
    else if (this.visited[node]) {
      // NOTE: skip node have visited
    }

    else {

      this.visited[node] = true;
      this.graphPath.addAdjacency(node);
      // Get all adjacecy node then put them in queue => BFS
      let adjList = getAdjacencyList(convertToPolar(node));
      adjList.forEach(adj => {
        // Prevent add node to queue when reach at least one path lead to
        // the end in this number of movement
        if (!this.preventEnqueue) {
          this.queue.push(parseInt(adj));
        }
      })

    }
  }


  tracePrevOf(vertix) {
    // Return the index (key) of map that contain this vertix
    let targetKeys = [];
    this.graphPath.forEach((key, value) => {
      if (value.includes(vertix)) {
        targetKeys.push(key);
      }
    })
    return targetKeys;
  }
  traceRoutes() {
    // Get a list of map that contain element point to the end so we able
    // to trace back to the end
    let result = [];
    this.tracePrevOf(this.dest).forEach((prevOfDest) => {
      result.push(this.traceRoute(prevOfDest));
    })
    let minMovement = result.reduce((a, b) => Math.min(a.length, b.length));


    return result.filter((path) => path.length == minMovement.length);

  }


  traceRoute(preOfDest) {
    let route = [this.dest];
    let key = preOfDest;
    while (key != this.source) {
      route.push(key);
      key = this.tracePrevOf(key)[0];
    }
    route.push(this.source);

    return mapPathPolar(route.reverse());
  }

}
