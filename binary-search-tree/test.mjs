import BinarySearchTree from './binary_search_tree.mjs';

const randomArray = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

const tree = new BinarySearchTree();
tree.buildTree(randomArray(20));

console.log("Is tree balanced?")
console.log(tree.isBalanced());
console.log("\n")

console.log("Level order")
console.log(tree.levelOrder());
console.log("\n")

console.log("InOrder")
console.log(tree.inOrder());
console.log("\n")

console.log("preOrder")
console.log(tree.preOrder());
console.log("\n")

console.log("Post Order")
console.log(tree.postOrder());
console.log("\n")

tree.insert(150);
tree.insert(200);
tree.insert(300);
tree.insert(400);
tree.insert(500);
tree.insert(600);
tree.insert(700);
tree.insert(800);
tree.insert(900);

tree.prettyPrint();

console.log("Is tree balanced?")
console.log(tree.isBalanced());
console.log("\n")

console.log("Rebalacning tree...")
console.log(tree.rebalance());
console.log("\n")

console.log("Is tree balanced?")
console.log(tree.isBalanced());
console.log("\n")

console.log("Level order")
console.log(tree.levelOrder());
console.log("\n")

console.log("InOrder")
console.log(tree.inOrder());
console.log("\n")

console.log("preOrder")
console.log(tree.preOrder());
console.log("\n")

console.log("Post Order")
console.log(tree.postOrder());
console.log("\n")

tree.prettyPrint();