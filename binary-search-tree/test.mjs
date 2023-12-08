import './binary_search_tree.mjs';
import BinarySearchTree from './binary_search_tree.mjs';

const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new BinarySearchTree();
let node = tree.buildTree(data);

function prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.rightNode !== null) {
      prettyPrint(node.rightNode, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.leftNode !== null) {
      prettyPrint(node.leftNode, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

prettyPrint(node);

console.log("In Order Traversal:")
tree.inOrder();

console.log("Pre Order Traversal:")
tree.preOrder();

console.log("Post Order Traversal:")
tree.postOrder();