import { Node } from "./Node";
const InitBucketsSize = 8;

export class HashMap {
  constructor() {
    this.buckets = new Array(InitBucketsSize)
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Array();
    }
    this.capacity = 0;
    this.loadFactor = 0.75;
  }

  set(key, value) {
    if (this.capacity / this.buckets.length >= this.loadFactor) {
      this.rehash();
    }
    // TODO: deal with hasmap grow with rebance funcition
    const hashCode = this._hash(key) % this.buckets.length;
    if (hashCode < 0 || hashCode >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (!this.buckets[hashCode] || this.buckets[hashCode].length == 0) {
      // Empty bucket
      this.buckets[hashCode].push(new Node(key, value))
      this.capacity += 1;
    } else {

      let matchIndex = this.buckets[hashCode].findIndex(node => node.key == key);
      if (matchIndex >= 0) {
        // Override value if match any collision match key
        this.buckets[hashCode][matchIndex].value = value
      } else {
        this.buckets[hashCode].push(new Node(key, value))
        this.capacity += 1;
      }
    }
  }
  get(key) {
    const hashCode = this._hash(key) % this.buckets.length;
    const node = this.buckets[hashCode].find((node) => node.key == key)
    return node.value;
  }

  remove(key) {
    const hashCode = this._hash(key) % this.buckets.length;
    const nodeIndex = this.buckets[hashCode].findIndex(node => node.key == key)
    if (nodeIndex >= 0) {
      this.buckets[hashCode] = this.buckets[hashCode].filter(node => node.key != key);
      this.capacity -= 1;
    }
  }

  length() {
    // NOTE: this  is wrong we calculate number of key - value  not
    // bucket
    return this.capacity;
  }

  clear() {
    this.buckets = new Array(InitBucketsSize);
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Array();
    }
    this.capacity = 0;
  }
  keys() {
    let keyList = [];
    this.buckets.forEach(bucket => {
      bucket.forEach(node => {
        keyList.push(node.key)
      })
    })
    return keyList;
  }
  values() {
    let valueList = [];
    this.buckets.forEach(bucket => {
      bucket.forEach(node => {
        valueList.push(node.value)
      })
    })
    return valueList;
  }
  entries() {
    let entryList = [];
    this.buckets.forEach(bucket => {
      bucket.forEach(node => {
        entryList.push([node.key, node.value])
      })
    })

    return entryList;
  }


  //================> Helper <=================
  _hash(value) {
    let hashCode = 0;
    let PRIME_FACTOR = 31;
    for (let i = 0; i < value.length; i++) {
      hashCode = hashCode * PRIME_FACTOR + value.charCodeAt(i);
    }
    return hashCode;
  }
  rehash() {
    // Move all item to new bucket list with double size
    const old_buckets = this.buckets;

    this.buckets = new Array(old_buckets.length * 2)
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Array();
    }
    this.capacity = 0;
    old_buckets.forEach(bucket => {
      bucket.forEach(node => {
        this.set(node.key, node.value);
      })
    })
  }

}


