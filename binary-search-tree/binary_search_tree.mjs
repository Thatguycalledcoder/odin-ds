import Node from "./node.mjs";

class BinarySearchTree {
    constructor() {
        this.root = new Node();
    }

    buildTree(data) {
        data = this.data_preprocess(data);
        const mid = data.length / 2;
        this.root.value = mid;

        // build left subtree
        this.root.leftNode = this.buildSubtree(data.slice(0, mid), 0, mid-1);

        // build right subtree
        this.root.rightNode = this.buildSubtree(data.slice(mid + 1, data.length), mid + 1, data.length - 1);

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

        const mid = (start + end) / 2;
        let node = new Node(data[mid]);
        node.leftNode = this.buildSubtree(data.slice(start, mid), start, mid - 1);
        node.rightNode = this.buildSubtree(data.slice(mid+1, end+1), mid+1, end);

        return node;
    }

    insert() {}

    delete() {}

    find() {}

    levelOrder() {}

    inOrder() {}

    preOrder() {}

    postOrder() {}

    height() {}

    depth() {}

    isBalanced() {}

    rebalance() {}
}