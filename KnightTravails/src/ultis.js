export const convertToPolar = (index) => {
  return new  Polar(index % 8, parseInt(index / 8));
}

export const convertToIndex = (polar) => {
  return polar.x + polar.y * 8;
}

export class Polar {
  constructor(x , y ){
    this.x = x ;
    this.y = y ;
  }
}
export const getAdjacencyList = (polar) => {
  // Return list of valid adjacecy position for knight to move
  let moveWeights = [1, 2, -1, -2];
  let moveVectors = [];
  for (let left = 0; left < 4; left++) {
    for (let right = 0; right < 4; right++) {
      moveVectors.push(new Polar(moveWeights[left], moveWeights[right]));
    }
  }
  moveVectors = moveVectors.filter(move => {
    return Math.abs(move.x) + Math.abs(move.y) == 3
  })

  let moveList = [];

  moveVectors.forEach(moveVector => {
    let move = new  Polar(moveVector.x + polar.x, moveVector.y + polar.y);
    if (isInBound(move)) {
      moveList.push(move);
    }
  })

  return moveList;

}

// Check if point is a valid point in chess board
export const isInBound = (polar) => {
  return polar.x >= 0 && polar.x <= 7 && polar.y >= 0 && polar.y <= 7;
}
