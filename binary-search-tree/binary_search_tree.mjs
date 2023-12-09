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
        let unique_data = [];
        data.forEach((element) => {
            if (!(unique_data.includes(element))) {
                    unique_data.push(element);
                }
            }
        )
        unique_data.sort((a, b) => a - b);
        return unique_data;
    }

    buildSubtree(data, start, end) {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);
        let node = new Node(data[mid]);
        node.leftNode = this.buildSubtree(data, start, mid-1);
        node.rightNode = this.buildSubtree(data, mid+1, end);

        return node;
    }

    breadFirstSearch(node = this.root, arr = []) {
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

    insert(data) {
        if (this.root == null) return;

        let queue = [this.root];
        while (queue.length) {
            const current_node = queue.shift();
            
            if (data < current_node.value) { // if data less than current node
                if (current_node.leftNode == null) {
                    current_node.leftNode = Node(data);
                    return true;
                }
                else 
                    queue.push(current_node.leftNode);
            }
            else { //if data greater than current node
                if (current_node.rightNode == null) {
                    current_node.rightNode = Node(data);
                    return true;
                }
                else 
                    queue.push(current_node.rightNode);
            }

        }
        return false;
    }

    delete() {}

    find() {}

    levelOrder(callbackFn) {
        let arr = this.breadFirstSearch();
        callbackFn ? callbackFn(arr) : null;
    }

    inOrder(node = this.root, arr = []) {
        if (node == null)
            return 

        this.inOrder(node.leftNode, arr);
        // console.log(node.value);
        arr.push(node.value);
        this.inOrder(node.rightNode, arr);

        if (this.root.value === node.value)
            console.log(arr);
    }

    preOrder(node = this.root, arr = []) {
        if (node == null)
            return

        arr.push(node.value);
        this.preOrder(node.leftNode, arr);
        this.preOrder(node.rightNode, arr);

        if (this.root.value === node.value)
            console.log(arr);
    }

    postOrder(node = this.root, arr = []) {
        if (node == null)
            return

        this.preOrder(node.leftNode, arr);
        this.preOrder(node.rightNode, arr);
        arr.push(node.value);

        if (this.root.value === node.value)
            console.log(arr);
    }

    height() {}

    depth() {}

    isBalanced() {}

    rebalance() {}
}