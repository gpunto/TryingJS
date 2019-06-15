class Population {
    constructor(individuals) {
        this.individuals = individuals;
        this.fittest = undefined;
    }

    calcFitenss(target) {
        this.fittest = undefined;
        return this.individuals
            .map(dna => {
                const res = {
                    fitness: dna.fitness(target),
                    dna: dna
                };
                if (this.fittest == undefined || this.fittest.fitness < res.fitness)
                    this.fittest = res;

                return res;
            });
    }

    reproduction(withFitness, mutationRate) {
        const newIndividuals = [];

        for (let i = 0; i < withFitness.length; i++) {
            const parent1 = randomByFitness(withFitness);
            const parent2 = randomByFitness(withFitness);
            const child = parent1.dna.crossover(parent2.dna)
            child.mutate(mutationRate);
            newIndividuals.push(child);
        }
        this.individuals = newIndividuals;
    }

    static random(populationSize, dnaSize) {
        const individuals = [];
        for (let i = 0; i < populationSize; i++)
            individuals.push(new Dna(dnaSize));

        return new Population(individuals);
    }
}

function randomByFitness(populationWithFitness) {
    let treshold;
    let selected;
    let i = 0;
    do {
        i++;
        const index = Math.floor(Math.random() * populationWithFitness.length);
        treshold = Math.random();

        selected = populationWithFitness[index];
    } while (selected.fitness < treshold && i < 10000); // Avoiding infinite loops

    return selected;
}