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

    insert() {}

    delete() {}

    find() {}

    levelOrder() {}

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