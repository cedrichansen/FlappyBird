var bird;
var pipes = [];
var gameOver = false;
var score = 0;
var highScore = 0;
var bg;

function setup() {
    bg = loadImage("background.jpg");
    createCanvas(400 , 600);
    bird = new Bird();
    pipes.push(new PipePair());


}

function draw() {

    background(bg);

    for (var i = pipes.length-1; i>=0 ; i--) {
        pipes[i].show();

        if (!gameOver) {
            pipes[i].update();
        }

        if (pipes[i].hits(bird)) {
            gameOver = true;
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i,1);
        }
    }

    if (!gameOver) {
        bird.update();
    }
    bird.show();

    if (frameCount % 100 == 0 && !gameOver) {
        pipes.push(new PipePair());
        score++;
        console.log(score);
    }

    textSize(32);
    text("Score: "+score, 10, 30);

}


function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}

function mouseClicked() {
    bird.up();
}