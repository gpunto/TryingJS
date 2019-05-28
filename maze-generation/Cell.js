class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        // top, right, bottom, left
        this.walls = [true, true, true, true];
        this.visited = false;
    }

    removeTop() {
        this.walls[0] = false;
    }
    removeRight() {
        this.walls[1] = false;
    }
    removeBottom() {
        this.walls[2] = false;
    }
    removeLeft() {
        this.walls[3] = false;
    }

    render(side, current) {
        let x = this.j * side;
        let y = this.i * side;

        // Draw background
        if (this === current)
            fill(0, 100, 100);
        else if (this.visited)
            fill(50, 100, 200);
        else
            fill(200, 100, 50);
        noStroke();
        rect(x, y, side, side);

        // Draw walls
        stroke(255);
        if (this.walls[0])
            line(x, y, x + side, y);
        if (this.walls[1])
            line(x + side, y, x + side, y + side);
        if (this.walls[2])
            line(x, y + side, x + side, y + side);
        if (this.walls[3])
            line(x, y, x, y + side);
    }
}