export const convertToPolar = (index) => {

  return new Polar(parseInt(index) % 8, parseInt(parseInt(index) / 8));
}

export const convertToIndex = (polar) => {
  return polar.x + polar.y * 8;
}

export class Polar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  input() {

    const x = prompt("x=");
    this.x = x;
    const y = prompt("y=");
    this.y = y;
  }
}
export const getAdjacencyList = (polar) => {

  let moveList = [];

  let moveVectors = [
    { x: 1, y: 2 },
    { x: 1, y: -2 },
    { x: 2, y: 1 },
    { x: 2, y: -1 },
    { x: -1, y: 2 },
    { x: -1, y: -2 },
    { x: -2, y: 1 },
    { x: -2, y: -1 }
  ]
  moveVectors.forEach(moveVector => {
    let move = new Polar(moveVector.x + polar.x, moveVector.y + polar.y);
    if (isInBound(move)) {
      moveList.push(convertToIndex(move));
    }
  })
  return moveList;

}

// Check if point is a valid point in chess board
export const isInBound = (polar) => {
  return polar.x >= 0 && polar.x <= 7 && polar.y >= 0 && polar.y <= 7;
}


export const mapPathPolar = (route) => {
  return route.map((value) => convertToPolar(value));
}
export const mapPathList = (route) => {
  // TODO
  // Convert path
}



