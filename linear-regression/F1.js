// f: y = b0 + b1 * x
class F1 {
    constructor(b0, b1) {
        this.b0 = b0;
        this.b1 = b1;
    }

    yOf(x) {
        return this.b0 + this.b1 * x;
    }
}