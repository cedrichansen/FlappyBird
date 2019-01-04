var bird;
var pipes = [];
var gameOver = false;
var score = 0;
var highScore = 0;
var bg;
var buttonLoaded = false;
var restartGameButton;
var canvasWidth = 400;
var canvasHeight = 600;

function setup() {
    bg = loadImage("background.jpg");
    createCanvas(canvasWidth, canvasHeight);
    bird = new Bird();
    pipes.push(new PipePair());
}

function draw() {

    background(bg);

    for (var i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show();

        if (!gameOver) {
            pipes[i].update();
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }

        if (pipes[i].hits(bird)) {
            gameOver = true;
            if (!buttonLoaded) {
                restartGameButton = createButton("Restart game?");;
                restartGameButton.mousePressed(restartGame);
                restartGameButton.position(canvasWidth/2 - 30, canvasHeight/2);
                buttonLoaded = true;
            }
        }
    }

    if (!gameOver) {
        bird.update();
    }
    bird.show();

    if (frameCount % 70 == 0 && !gameOver) {
        pipes.push(new PipePair());
        score++;
        console.log(score);
    }

    textSize(32);
    text("Score: " + score, 10, 30);
    text("Highscore: " + highScore, canvasWidth-200, 30);


}


function restartGame() {
    if (score > highScore) {
        highScore = score;
    }
    pipes = [];
    gameOver = false;
    score = 0;
    bird = new Bird();
    restartGameButton.remove();
    buttonLoaded = false;

}


function keyPressed() {
    if (key == ' ') {
        bird.up();
    }

}

function mouseClicked() {
    bird.up();
}