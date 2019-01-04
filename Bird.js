var birdImg;

function Bird (){

    birdImg = loadImage("bird.png");

    this.y = height/2;
    this.x = 64;
    this.diameter = 32;

    this.gravity = 0.85;
    this.liftForce = -16;
    this.velocity = 0;

    this.show = function () {
        fill(255);
        ellipse(this.x, this.y, this.diameter,this.diameter);
        //image(birdImg,this.x, this.y, this.diameter,this.diameter)
        
    }

    this.up = function () {
        this.velocity += this.liftForce;
    }
    

    this.update = function () {
        this.velocity += this.gravity;
        this.velocity *= 0.925;
        this.y += this.velocity;


        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }

    }


}