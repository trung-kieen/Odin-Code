import { mergeSort } from "./ultis";
import { Tree } from "./Tree";
import { Node } from "./Node";

let orderedList = [1, 2, 4, 5, 6, 7, 9]
let tree1 = new Tree(orderedList);
console("Before insert 13")
tree1.log();
tree1.insert(13);
console("After insert 13")
tree1.log();

let unorderedList = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let tree2 = new Tree(unorderedList);
console.log("Log  un oder list")
tree2.log();



let list3 = [10, 30, 20, 100, 500]
let tree3 = new Tree(list3);
console("Before insert 40")
tree3.log();
tree3.insert(40)
console("After insert 40")
tree3.log();

