import Chessboard from "./chessboard.mjs";

const board = new Chessboard();
const start = [0, 0];
const end = [7, 7];

const shortest_path = board.find_shortest_path(start, end);

if (shortest_path) {
    console.log(`Shortest path from ${start} to ${end}:`)
    for (const path of shortest_path) {
        console.log(path);
    }
    console.log(`Number of moves: ${shortest_path.length - 1}`)
}
else
    console.log("No path found.")
