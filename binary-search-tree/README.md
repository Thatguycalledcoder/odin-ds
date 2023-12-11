# Binary Search Tree

This is a JavaScript implementation of a Binary Search Tree (BST) with various functionalities. It provides methods to build, traverse, search, insert, delete, and perform other operations on a binary search tree.

## Usage

### Import the `BinarySearchTree` class:

```javascript
import BinarySearchTree from "./BinarySearchTree.mjs";
```

### Create an instance of the BinarySearchTree:

```javascript
const bst = new BinarySearchTree();
```

### Build the tree using the `buildTree` method:

```javascript
const data = [/* your array of data */];
bst.buildTree(data);
```

### Perform various operations on the tree:

- **Inserting a new node:**

  ```javascript
  bst.insert(newValue);
  ```

- **Deleting a node:**

  ```javascript
  bst.delete(valueToDelete);
  ```

- **Searching for a node:**

  ```javascript
  const result = bst.find(valueToFind);
  ```

- **Traversing the tree:**

  - In-order traversal:

    ```javascript
    const inOrderArray = bst.inOrder();
    ```

  - Pre-order traversal:

    ```javascript
    const preOrderArray = bst.preOrder();
    ```

  - Post-order traversal:

    ```javascript
    const postOrderArray = bst.postOrder();
    ```

  - Breadth-first search:

    ```javascript
    const bfsArray = bst.breadthFirstSearch();
    ```

- **Checking if the tree is balanced:**

  ```javascript
  const isBalanced = bst.isBalanced();
  ```

- **Rebalancing the tree:**

  ```javascript
  bst.rebalance();
  ```

- **Getting the height of a node:**

  ```javascript
  const nodeHeight = bst.height(nodeValue);
  ```

- **Getting the depth of a node:**

  ```javascript
  const nodeDepth = bst.depth(nodeValue);
  ```

- **Pretty printing the tree:**

  ```javascript
  bst.prettyPrint();
  ```

Feel free to explore and customize the code based on your specific use case.

## License

This Binary Search Tree implementation is licensed under the [MIT License](LICENSE).