class Chessboard {
    constructor(rows = 8, cols = 8) {
        this.rows = rows;
        this.cols = cols;
        this.adjacency_list = {};

        this.generate_adjacency_list();
    }

    generate_adjacency_list() {
        for (var row = 0; row < this.rows; row++) {
            for (var col = 0; col < this.cols; col++) {
                const current_square = [row, col];
                const neighbors = this.get_neighbors(row, col);
                this.adjacency_list[current_square] = neighbors;
            }
        }
    }

    get_neighbors(row, col) {
        let neighbors = [];

        const possible_moves = [
            [-1, -2], [-2, -1], [-2, 1], [-1, 2],
            [1, -2], [2, -1], [2, 1], [1, 2]
        ];

        for (const move of possible_moves) {
            let new_row = row + move[0];
            let new_col = col + move[1];

            if ((new_row >= 0) && (new_row < this.rows) && (0 <= new_col) && (new_col < this.cols)) {
                neighbors.push([new_row, new_col]);
            }
        }

        return neighbors;
    }

    find_shortest_path(start, end) {
        let queue = [[start, [start]]];
        let visited = new Set();

        while (queue) {
            let [current_square, path] = queue.shift();
            // console.log("Current path")
            // console.log(path);
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
}

export default Chessboard;