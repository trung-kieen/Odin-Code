import { listParser, mergeSort } from "./ultis";
import { Node } from "./Node"
const ident = "|-"

export class Tree {
  constructor(list) {
    this.root = this.buildTree(list);
  }
  buildTree(list) {
    // Sort
    let parsedList = listParser(list);
    return this._buildTreeRec(parsedList, 0, parsedList.length - 1);
  }

  deleteItem(value) {
    this.root = this._deleteItemRec(this.root, value);
  }
  log() {
    let tempt = this.root;
    let pre = ""
    this._log(tempt, pre);
  }

  preOrder(callback) {
    let tempt = this.root;
    this._preOrderRec(tempt, callback);
  }
  inOrder(callback) {
    let tempt = this.root;
    this._inOrderRec(tempt, callback);
  }
  postOrder(callback) {
    let tempt = this.root;
    this._postOrderRec(tempt, callback);
  }
  find(value) {
    // Return node that contain this value
    let result;
    this.preOrder((node) => {
      if (node.value == value) {
        result = node;
      }
    })
    return result
  }

  levelOrder(callback) {
    let queue = [this.root];
    while (queue.length != 0) {
      let item = queue.shift();
      callback(item);
      if (item.left != null) {
        queue.push(item.left)
      }
      if (item.right != null) {
        queue.push(item.right)
      }
    }
  }

  remove(value) {
    this.root = this._removeRec(this.root, value);
  }
  // TODO: implement depth same with height but count from root: root
  // have depth = 0, right and left of root have depth = 1
  height(node) {
    // Endpoint case
    if (node == null) {
      return 0
    }
    const currentNodeHeight = 1;

    if (node.right == null && node.left == null) {
      return 1
    }
    else {
      // have both left and right if one of them is null the return value
      // is 0 match endpoint case
      let leftHeight = this.height(node.left);
      let rightHeight = this.height(node.right);
      // Height is base on higher path
      return currentNodeHeight + ((leftHeight > rightHeight) ? leftHeight : rightHeight);
    }
  }

  isBalanced() {
    // Banlance tree have most difference height of branches is 1
    return ((Math.abs(this.height(this.root.left) - this.height(this.root.right))) <= 1) ? true : false;
  }
  reBalance() {
    let array = [];
    this.levelOrder((node) => {
      array.push(node.value);
    })
    this.root = this.buildTree(array);
  }


  // ==================> Helper <================
  _buildTreeRec(list, start, end) {
    if (start > end) {
      return null;
    }
    let mid = parseInt((start + end) / 2);
    let node = new Node(list[mid]);
    node.left = this._buildTreeRec(list, start, mid - 1)
    node.right = this._buildTreeRec(list, mid + 1, end)
    return node;
  }

  _deleteItemRec(node, value) {
    if (!node) {
      return new Node(value);
    }
    else if (node.value == value) {
      return node;
    }
    else if (value > node.value) {
      node.right = this._deleteItemRec(node.right, value);
      return node;
    } else {
      node.left = this._deleteItemRec(node.left, value);
      return node;
    }
  }
  _preOrderRec(node, callback) {
    if (!node) {
      return
    }
    callback(node)
    this._preOrderRec(node.left, callback);
    this._preOrderRec(node.right, callback);

  }
  _inOrderRec(node, callback) {
    if (!node) {
      return
    }
    this._inOrderRec(node.left, callback);
    callback(node)
    this._inOrderRec(node.right, callback);
  }
  _postOrderRec(node, callback) {
    if (!node) {
      return
    }
    this._postOrderRec(node.left, callback);
    this._postOrderRec(node.right, callback);
    callback(node)
  }

  _removeRec(node, value) {
    if (node == null) {
      return node;
    }
    if (value > node.value) {
      node.right = this._removeRec(node.right, value);
      return node
    }
    else if (value < node.value) {
      node.left = this._removeRec(node.left, value);
      return node
    }

    // The case value is node value
    else {
      if (node.left == null) {
        return node.right;
      }
      else if (node.right == null) {
        return node.left;
      }
      // Both not null we have two child for this node
      else {
        // Find nearest value in the right
        let candidateNode = node.right;
        while (candidateNode.left != null) {
          candidateNode = candidateNode.left;
        }
        node.value = candidateNode.value;
        // Remove candidate node  old position to avoid duplicate
        node.right = this._removeRec(node.right, candidateNode.value)
        return node;
      }
    }
  }

  _log(node, preIdent) {
    if (!node) {
      return
    }
    console.log(`${preIdent}[${node.value}]`);
    preIdent += ident;
    this._log(node.left, preIdent);
    this._log(node.right, preIdent);
  }

}


