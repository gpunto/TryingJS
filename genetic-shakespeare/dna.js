class Dna {
    constructor(init) {
        if (Array.isArray(init))
            this.genes = init;
        else {
            this.genes = [];
            for (let i = 0; i < init; i++)
                this.genes.push(randomChar());
        }
    }

    fitness(target) {
        let sum = 0;
        for (let i = 0; i < this.genes.length; i++) {
            if (this.genes[i] == target.charAt(i))
                sum += 1;
        }
        return sum / this.genes.length;
    }

    crossover(that) {
        const childDna = []
        const splitIndex = Math.floor(Math.random() * this.genes.length);

        for (let i = 0; i < this.genes.length; i++) {
            if (i < splitIndex)
                childDna.push(this.genes[i]);
            else
                childDna.push(that.genes[i]);
        }
        return new Dna(childDna);
    }

    mutate(rate) {
        for (let i = 0; i < this.genes.length; i++)
            if (Math.random() < rate)
                this.genes[i] = randomChar()
    }
}

function randomChar() {
    const random = Math.floor(Math.random() * 128);
    return String.fromCharCode(random);
}