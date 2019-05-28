class Grid {
    constructor(nrows, ncols) {
        this.nrows = nrows;
        this.ncols = ncols;

        this.cells = []

        for (let i = 0; i < nrows; i++)
            for (let j = 0; j < ncols; j++)
                this.cells.push(new Cell(i, j));
    }

    get(i, j) {
        const index = i * this.ncols + j;
        return this.cells[index];
    }

    neighbors(cell) {
        const i = cell.i;
        const j = cell.j;
        const res = [];

        if (i > 0)
            res.push(this.get(i - 1, j));
        if (j > 0)
            res.push(this.get(i, j - 1));
        if (i < this.nrows - 1)
            res.push(this.get(i + 1, j));
        if (j < this.ncols - 1)
            res.push(this.get(i, j + 1));

        return res;
    }

    removeWallsBetween(a, b) {
        const di = a.i - b.i;
        const dj = a.j - b.j;
        if (di === 1) {
            a.removeTop();
            b.removeBottom();
        } else if (di === -1) {
            a.removeBottom();
            b.removeTop();
        }
        else if (dj === 1) {
            a.removeLeft();
            b.removeRight();
        } else if (dj === -1) {
            a.removeRight();
            b.removeLeft();
        }
    }

    // side is the size (in pixels) of each cell's side
    render(side, current) {
        for (let i = 0; i < this.cells.length; i++)
            this.cells[i].render(side, current);
    }
}