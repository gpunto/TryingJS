
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }

    addValue(val) {
        if (val < this.value)
            if (this.left != null)
                this.left.addValue(val);
            else
                this.left = new Node(val);
        else if (val > this.value)
            if (this.right != null)
                this.right.addValue(val);
            else
                this.right = new Node(val);
    }

    traverse(operation) {
        if (this.left != null)
            this.left.traverse(operation)
        operation(this.value);
        if (this.right != null)
            this.right.traverse(operation)
    }

    contains(val) {
        if (this.value == val)
            return true;
        else if (val < this.value)
            if (this.left == null)
                return false;
            else
                return this.left.contains(val);
        else
            if (this.right == null)
                return false;
            else
                return this.right.contains(val);
    }
}
