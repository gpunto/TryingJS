function randomInt(max) {
    return Math.floor(Math.random() * max);
}

const tree = new Tree();

for (let i = 0; i < 11; i++)
    tree.addValue(randomInt(100))


tree.print();
console.log(tree.toArray());
console.log(tree.sum());