const target = "To be or not to be, that is the question."
const populationSize = 2000;
const mutationRate = 0.01;
const population = Population.random(populationSize, target.length);
let fittest = undefined;
let generations = 0;

function setup() {
    createCanvas(700, 200);
}

function draw() {
    if (fittest == undefined || fittest.fitness < 1) {
        background(21);

        fill(255);
        const withFitness = population.calcFitenss(target);
        population.reproduction(withFitness, mutationRate);
        fittest = population.fittest;

        textFont("Courier New", 20);
        text(`Generations: ${generations}`, 10, 50);
        text(`Fittest: ${fittest.dna.genes.join("")}`, 10, 100);
        text(`Fitness: ${fittest.fitness}`, 10, 150);

        generations++;
    }
}