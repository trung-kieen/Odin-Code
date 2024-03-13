import expect from "expect";
import { Tree } from "./Tree"
import { Node } from "yallist";

// Test cases for Binary Tree
describe('Binary Tree', () => {
  let binaryTree;



  it('should find a value in the binary tree', () => {
    const array = [5, 3, 8, 1, 4, 7, 9];
    let binaryTree = new Tree(array);
    expect(binaryTree.find(7)).not.toBeNull;
    expect(binaryTree.find(10)).toBeNull;
  });

  it('should traverse the binary tree in level order', () => {
    const array = [5, 3, 8, 1, 4, 7, 9];
    let binaryTree = new Tree(array);
    const result = [];
    binaryTree.levelOrder((node) => result.push(node.value));
    expect(result).toEqual([5, 3, 8, 1, 4, 7, 9]);
  });

  it('should traverse the binary tree in pre-order', () => {
    const array = [5, 3, 8, 1, 4, 7, 9];
    let binaryTree = new Tree(array);
    const result = [];
    binaryTree.preOrder((node) => result.push(node.value));
    expect(result).toEqual([5, 3, 1, 4, 8, 7, 9]);
  });

  it('should traverse the binary tree in in-order', () => {
    const array = [5, 3, 8, 1, 4, 7, 9];
    let binaryTree = new Tree(array);
    const result = [];
    binaryTree.inOrder((node) => result.push(node.value));
    expect(result).toEqual([1, 3, 4, 5, 7, 8, 9]);
  });

  it('should traverse the binary tree in post-order', () => {
    const array = [5, 3, 8, 1, 4, 7, 9];
    let binaryTree = new Tree(array);
    const result = [];
    binaryTree.postOrder((node) => result.push(node.value));
    expect(result).toEqual([1, 4, 3, 7, 9, 8, 5]);
  });

  it('should calculate the height of a node in the binary tree', () => {
    const array = [5, 3, 8, 1, 4, 7, 9];
    let binaryTree = new Tree(array);
    expect(binaryTree.height(binaryTree.root)).toBe(3);
    expect(binaryTree.height(binaryTree.root.left)).toBe(2);
    expect(binaryTree.height(binaryTree.root.right)).toBe(2);
  });

  it('should check if the binary tree is balanced', () => {
    const array = [5, 3, 8, 1, 4, 7, 9];
    let binaryTree = new Tree(array);
    expect(binaryTree.isBalanced()).toBe(true);
  });

  it('should rebalance the binary tree', () => {
    const array = [5, 3, 1, 4, 8, 7, 9];
    let binaryTree = new Tree(array);
    binaryTree.reBalance();
    // Assert the tree is balanced after rebalancing
    expect(binaryTree.isBalanced()).toBe(true);
  });
});

