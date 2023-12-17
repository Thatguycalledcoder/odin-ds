# Chessboard Shortest Path Finder

This is a JavaScript class called `Chessboard` that helps find the shortest path between two squares on a chessboard using a breadth-first search algorithm. The chessboard is represented as a grid with rows and columns, and the class generates an adjacency list to represent the possible moves of a knight on the chessboard.

## Usage

### Installation

No installation is required. Simply include the `Chessboard` class in your JavaScript project.

### Example

```javascript
import Chessboard from './Chessboard';

// Create a new Chessboard instance with default 8x8 dimensions
const chessboard = new Chessboard();

// Define the start and end squares as [row, column] pairs
const startSquare = [0, 0];
const endSquare = [7, 7];

// Find the shortest path from start to end
const shortestPath = chessboard.find_shortest_path(startSquare, endSquare);

// Display the result
console.log("Shortest Path:", shortestPath);
```

## How it Works

The `Chessboard` class generates an adjacency list during initialization, representing the possible moves of a knight on the chessboard. The `find_shortest_path` method then performs a breadth-first search to find the shortest path from a given start square to an end square.

### Methods

#### `generate_adjacency_list()`

Generates an adjacency list for the chessboard by iterating through each square and calculating the possible moves of a knight.

#### `get_neighbors(row, col)`

Returns an array of neighboring squares for a given square (row, col).

#### `find_shortest_path(start, end)`

Finds the shortest path from the start square to the end square using breadth-first search.

## Code Snippets

### Generating the Adjacency List

```javascript
// Inside the constructor
generate_adjacency_list() {
    for (var row = 0; row < this.rows; row++) {
        for (var col = 0; col < this.cols; col++) {
            const current_square = [row, col];
            const neighbors = this.get_neighbors(row, col);
            this.adjacency_list[current_square] = neighbors;
        }
    }
}
```

### Finding the Shortest Path

```javascript
// Inside the find_shortest_path method
find_shortest_path(start, end) {
    let queue = [[start, [start]]];
    let visited = new Set();

    while (queue) {
        let [current_square, path] = queue.shift();
        
        if (current_square[0] === end[0] && current_square[1] === end[1]) {
            path.splice(0, 1, start);
            path.splice(path.length-1, 1, end);
            return path;
        }

        if (!(visited.has(current_square))) {
            visited.add(current_square);
            for (const neighbor of this.adjacency_list[current_square]) {
                queue.push([neighbor, path.concat([neighbor])]);
            }
        }
    }

    return null;
}
```

Feel free to use and modify this code according to your needs!