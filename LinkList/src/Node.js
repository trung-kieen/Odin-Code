export class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
  getValue = () => {
    return this.value;
  }
  toString = () => {
    let result = "";
    if (this.value === null) {
      result = "( null )";
    } else if (this.value === undefined) {
      result = "( undefined )";
    }
    else {
      result = `( ${this.value} )`;
    }


    if (this.nextNode) {
      result += " -> ";
    }
    else {
      result += " -> null";
    }

    return result;
  }


}
