import Node  from "./node.mjs";

export default class LinkedList {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
        this.head.nextNode = this.tail;
    }
    // Add a new node to the end of the list
    append(value){
        // Check if no tail is created
        if (this.head.value == null) {
            this.head.value = value;
        }
        else if (this.tail.value != null) {
            const node = new Node(value);
            this.tail.nextNode = node;
            this.tail = node;
        }
        else {
            this.tail.value = value;
        }
    }

    // Add a new node at the start of the list 
    prepend(value){
        if (this.head.value != null) {
            const node = new Node(value);
            node.nextNode = this.head;
            this.head = node;
        }
        else {
            this.head.value = value;
        }
    }

    // Return the size of the list
    size() {
        let size = 0;
        let node = this.head;
        while (node) {
            size ++;
            node = node.nextNode;
        }
        return size;
    }

    // Return the node at the start of the list
    get_head() {
        return this.head;
    }

    // Return the node at the end of the list
    get_tail() {
        return this.tail;
    }

    // Return the node at a given index
    at(index) {
        let curidx = 0;
        let node = this.head;
        while (node.nextNode) {
            if (curidx === index) {
                return node;
            }
            node = node.nextNode;
            curidx++;
        }
    }

    // Remove the last element in the list
    pop() {
        let node = this.head;

        while (node.nextNode) {
            if (node.nextNode.nextNode == null) {
                node.nextNode.value = undefined;   
                node.nextNode = null;
            }
        }
    }

    // Return a boolean indicating whether an node exists in the list
    contains(value) {
        let node = this.head;
        
        while (node) {
            if (node.value === value) {
                return true;
            }
            node = node.nextNode;
        }
        return false;
    }

    // Return the index of the node of a given value in the list
    find(value) {
        let curidx = 0;
        let node = this.head;
        while (node) {
            if (node.value === value) {
                return curidx;
            }
            node = node.nextNode;
            curidx++;
        }
    }

    // Create a string object of the list
    toString() {
        let str = `(${this.head.value})`;
        let node = this.head.nextNode;

        while (node) {
            str += ` -> ${node.value}`;
            node = node.nextNode;
        }

        return str;
    }

    // Insert a node at a given index in the list
    insertAt(value, index) {
        let curidx = 1; // current index is set to one to take into account the head node

        // if index is 0, then prepend the new node
        if (index === 0) {
            this.prepend(value);
        }
        let node = this.head;
        while (node) {
            if (curidx === index) {
                const nodeNew = new Node(value);
                nodeNew.nextNode = node.nextNode;
                node.nextNode = nodeNew;
                break;
            }
            node = node.nextNode;
            curidx++;
        }
    }

    // Remove a node from a given index
    removeAt(index) {
        let curidx = 0;
        let node = this.head;
        while (node) {
            if ((curidx + 1) === index) {
                let next = node.nextNode;
                node.nextNode = node.nextNode.nextNode;
                next.nextNode = null;
                next.value = undefined;
                break;
            }
            node = node.nextNode;
            curidx++;
        }
    }
}