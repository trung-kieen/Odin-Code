export class List {
  constructor(size = 16) {
    this.list = new Array(size);
    this.buckets = this.buckets.map(element => { new Array() });
  }
  length() {
    return this.buckets.length;
  }

  at(position) {
    if (position < 0 || position >= this.length()) {
      throw new Error("Trying to access index out of bound");
    } else {
      return this.buckets[position];
    }
  }
  set(position, value) {
    this.buckets[position] = value;
  }
}
