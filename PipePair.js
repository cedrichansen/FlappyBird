var topPipeimg;
var bottomPipeimg;

function PipePair() {

    //
    // topPipeimg = loadImage()
    bottomPipeimg = loadImage("bottomPipe.png");
    this.gap = 150;

    this.topPipe = 20 + random(height - 40  );
    this.bottom = height - this.topPipe - this.gap;


    this.x = width;
    this.w = 20;
    this.speed = 3;

    this.highlight = false;

    this.hits = function (bird) {
        if (bird.y < this.topPipe || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x <this.x + this.w) {
                this.highlight = true;
                return true;
            }
        }
        this.highlight = false;
        return false;

    }


    this.show = function() {
        fill(255);
        if (this.highlight) {
            fill(255,0,0);
        }
        rect(this.x, 0, this.w, this.topPipe);
        rect(this.x, height-this.bottom, this.w, this.bottom);

    }

    this.update = function() {
        this.x -= this.speed

    }

    this.offscreen = function (){
        return this.x < -this.w
    }






}