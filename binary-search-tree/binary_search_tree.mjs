import Node from "./node.mjs";

export default class BinarySearchTree {
    constructor() {
        this.root = new Node();
    }

    buildTree(data) {
        data = this.data_preprocess(data);
        console.log(data);
        const mid = Math.floor(data.length / 2);
        const length = data.length
        this.root.value = data[mid];

        // build left subtree
        this.root.leftNode = this.buildSubtree(data, 0, mid-1);

        // build right subtree
        this.root.rightNode = this.buildSubtree(data, mid + 1, length - 1);

        return this.root;
    }


    data_preprocess(data) {
        return [...new Set(data.sort((a, b) => a - b))];
    }

    buildSubtree(data, start, end) {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);
        let node = new Node(data[mid]);
        node.leftNode = this.buildSubtree(data, start, mid-1);
        node.rightNode = this.buildSubtree(data, mid+1, end);

        return node;
    }

    breadthFirstSearch(node = this.root, arr = []) {
        if (node == null) return;

        let queue = [node];
        while (queue.length) {
            const current_node = queue.shift();

            if (current_node.leftNode) 
                queue.push(current_node.leftNode);
            if (current_node.rightNode) 
                queue.push(current_node.rightNode);
            arr.push(current_node);
        }

        return arr;
    }
    
    breadthSearchH(node = this.root, iterations) {
        if (node == null) return;

        let queue = [node, null];
        while (queue.length) {
            const current_node = queue.shift();

            if (current_node !== null)  {
                if (current_node.leftNode) 
                    queue.push(current_node.leftNode);
                if (current_node.rightNode) 
                    queue.push(current_node.rightNode);
            }
            else {
                iterations++;
                if (queue.length > 0) queue.push(null);
            }
        }

        return iterations;
    }



    insert(data) {
        if (this.root == null) return;

        let queue = [this.root];
        while (queue.length) {
            const current_node = queue.shift();
            
            if (data < current_node.value) { // if data less than current node
                if (current_node.leftNode == null) {
                    current_node.leftNode = new Node(data);
                    return true;
                }
                else 
                    queue.push(current_node.leftNode);
            }
            else { //if data greater than current node
                if (current_node.rightNode == null) {
                    current_node.rightNode = new Node(data);
                    return true;
                }
                else 
                    queue.push(current_node.rightNode);
            }

        }
        return false;
    }

    delete(data) {
        if (this.root == null) return;

        let queue = [this.root];
        while (queue.length > 0) {
            const current_node = queue.shift();
            
            if (current_node.leftNode.value === data) {
                let children = this.inOrder(current_node.leftNode, [], current_node.leftNode);
                children.splice(children.indexOf(current_node.leftNode.value), 1);
                current_node.leftNode = this.buildSubtree(children, 0, children.length - 1);
            }
            else if (current_node.rightNode.value === data) {
                let children = this.inOrder(current_node.rightNode, [], current_node.rightNode);
                children.splice(children.indexOf(current_node.rightNode.value), 1);
                current_node.rightNode = this.buildSubtree(children, 0, children.length - 1);
            }
            else if (data < current_node.value) {
                queue.push(current_node.leftNode);
            }
            else {
                queue.push(current_node.rightNode);
            }

        }
        return this.root;
    }

    find(data, iterations = null, node = this.root) {
        if (node == null) return;

        let queue = [node];
        while (queue.length) {
            const current_node = queue.shift();

            if (iterations !== null) {
                iterations++;
            }
            
            if (data === current_node.value)  {
                if (iterations) return iterations;
                return current_node;
            }
            else if (data < current_node.value) { // if data less than current node
                if (current_node.leftNode == null) {
                    return false;
                }
                else 
                    queue.push(current_node.leftNode);
            }
            else { //if data greater than current node
                if (current_node.rightNode == null) {
                    return false;
                }
                else 
                    queue.push(current_node.rightNode);
            }

        }
        return false;
    }

    levelOrder(callbackFn) {
        let arr = this.breadthFirstSearch();
        return callbackFn ? callbackFn(arr) : arr;
    }

    inOrder(node = this.root, arr = [], first = null) {
        if (node == null)
            return 

        this.inOrder(node.leftNode, arr);
        // console.log(node.value);
        arr.push(node.value);
        this.inOrder(node.rightNode, arr);

        if (first !== null && first.value === node.value) {
            return arr;
            
        }
        else if (this.root.value === node.value) {
            return arr;
        }
    }

    preOrder(node = this.root, arr = []) {
        if (node == null)
            return

        arr.push(node.value);
        this.preOrder(node.leftNode, arr);
        this.preOrder(node.rightNode, arr);

        if (this.root.value === node.value) {
            return arr;
        }
    }

    postOrder(node = this.root, arr = []) {
        if (node == null)
            return

        this.preOrder(node.leftNode, arr);
        this.preOrder(node.rightNode, arr);
        arr.push(node.value);

        if (this.root.value === node.value) {
            return arr;
        }
    }

    height(node, iterations = 0) {
        if (!(node instanceof Node))
            node = this.find(node);

       return this.breadthSearchH(node, iterations);
    }

    depth(data) {
        if (this.root == null) return -1;

        return this.find(data, 0); //Set the iterations parameter to zero to track number of iterations for depth
    }

    isBalanced() {
        if (this.root == null) return false;

        console.log(Math.abs(this.height(this.root.leftNode, 0)));
        console.log(Math.abs(this.height(this.root.rightNode, 0)));
        return Math.abs(this.height(this.root.leftNode, 0) - this.height(this.root.rightNode, 0)) <= 1;
    }

    rebalance() {
        this.buildTree(this.inOrder());
        return this.root;
    }

    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
          return;
        }
        if (node.rightNode !== null) {
          this.prettyPrint(node.rightNode, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.leftNode !== null) {
          this.prettyPrint(node.leftNode, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
}