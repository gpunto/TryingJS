const dataPoints = []
const canvasSize = 800;
let fun = undefined;
function setup() {
    createCanvas(canvasSize, canvasSize);
    frameRate(30);
}

function touchStarted() { }

function mousePressed(event) {
    dataPoints.push(new Point(event.x, event.y));
    fun = ordinaryLeastSquares(dataPoints)
}

function ordinaryLeastSquares(points) {
    const { x, y } = points
        .reduce((acc, p) => {
            return {
                x: acc.x + p.x,
                y: acc.y + p.y
            };
        }, { x: 0, y: 0 });

    const xAvg = x / points.length;
    const yAvg = y / points.length;

    let b1Num = 0;
    let b1Den = 0;
    points.forEach(p => {
        b1Num += (p.x - xAvg) * (p.y - yAvg);
        b1Den += (p.x - xAvg) * (p.x - xAvg);
    });

    const b1 = b1Num / b1Den;
    const b0 = yAvg - b1 * xAvg;

    return new F1(b0, b1);
}

function draw() {
    background(21);

    if (fun != undefined) {
        fill(200, 200, 0);
        strokeWeight(3);
        stroke(250, 200, 0);
        line(0, fun.yOf(0), canvasSize, fun.yOf(canvasSize));
    }

    noStroke();
    fill(200, 0, 0);
    dataPoints.forEach(p => { ellipse(p.x, p.y, 6); })
}