class Tree {
    constructor() {
        this.root = null;
    }

    addValue(val) {
        if (this.root == null)
            this.root = new Node(val);
        else
            this.root.addValue(val);
    }

    traverse(operation) {
        if (this.root != null)
            this.root.traverse(operation);
    }

    contains(val) {
        if (this.root == null)
            return false;
        else
            return this.root.contains(val);
    }

    print() {
        this.traverse(console.log);
    }

    toArray() {
        const arr = [];
        this.traverse(val => { arr.push(val); });
        return arr;
    }

    sum() {
        let sum = 0;
        this.traverse(val => { sum += val; })
        return sum;
    }
}
