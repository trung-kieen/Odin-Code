import { Node } from './Node.js';

export class LinkList {
  constructor() {
    this.head = null;
  }

  forEach = (handleFunction) => {
    if (this.head) {
      for (let node = this.head; node; node = node.nextNode) {
        handleFunction(node);
      }
    }
  }


  prepend = (value) => {
    // Create new element at the start of list
    if (this.head == null) {
      this.head = new Node(value);
    }
    else {
      let temporary = this.head;
      this.head = new Node(value);
      this.head.nextNode = temporary;
    }
  }
  append = (value) => {
    // Create new element at the end of list
    if (this.head == null) {
      this.head = new Node(value);
    } else {
      let temporary = this.head;
      while (temporary.nextNode != null) {
        temporary = temporary.nextNode;
      }
      temporary.nextNode = new Node(value);
    }
  }
  size = () => {
    if (this.head == null) {
      return 0;
    }
    let count = 0;
    this.forEach(node => {
      count++;
    })
    return count;
  }

  at = (position) => {
    let resultValue;
    let count = 0;
    this.forEach(node => {
      if (position == count) {
        resultValue = node.value;
      }
      count++;
    })
    return resultValue;
  }
  pop = (position) => {
    // No element in list
    if (this.head== null) {
      return;
    }

    // Only one element
    if(this.head.nextNode ==null){
      this.head = null;
      return;
    }


    let current = this.head;
    let previous = null;
    while (current.nextNode != null) {
      previous = current;
      current = current.nextNode;
    }
    // Now current is the last node of list
    if (previous) {
      previous.nextNode = null;
    }
  }
  toString = () => {
    let result = "";
    let node = this.head;
    while (node != null) {
      result += node.toString();
      node = node.nextNode;
    }
    return result;
  }

}
