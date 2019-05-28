const grid = new Grid(10, 12);
const cellSide = 40;

const stack = [];
let current = grid.get(0, 0);
stack.push(current);
current.visited = true;

function setup() {
    createCanvas(1000, 1000)
    frameRate(10);
}

function draw() {
    background(21);
    grid.render(cellSide, current);

    if (current) {
        const unvisitedNeighbors = grid.neighbors(current).filter(cell => !cell.visited);
        if (unvisitedNeighbors.length > 0) {
            const next = randElement(unvisitedNeighbors);
            grid.removeWallsBetween(current, next);
            stack.push(next);
            next.visited = true;
            current = next;
        } else {
            current = stack.pop();
        }
    }
}

function randElement(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}