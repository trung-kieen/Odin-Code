export class KnightTravails {
  constructor() {
    // Create 8x8 board keep track visited node
    this.visited = new Array(size * size);
    this.path = new Graph();
    this.queue = [];
  }



  travail(start, target) {
    this.queue.push(start);
    while (this.queue.length > 0) {
      let currentIndex = this.queue.pop();
      if (currentIndex == target) {
        break;
      }
      else{

      }


    }
  }
}
