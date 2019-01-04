var topPipeimg;
var bottomPipeimg;

function PipePair() {

    topPipeimg = loadImage("topPipe.png");
    bottomPipeimg = loadImage("bottomPipe.png");
    this.gap = 125;

    this.topPipe = 15 + random(height - this.gap + 15);
    this.bottom = height - this.topPipe - this.gap;


    this.x = width;
    this.w = 40;
    this.speed = 3.5;
    this.imageWidth = 300;
    this.imageOffset = 3.15;


    this.highlight = false;

    this.hits = function (bird) {
        if (bird.y< this.topPipe || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x< this.x + this.w) {
                this.highlight = true;
                return true;
            }
        }
        this.highlight = false;
        return false;

    }


    this.show = function() {
        fill(127,255,0);
        if (this.highlight) {
            fill(255,0,0);
        }

        rect(this.x, 0, this.w, this.topPipe);
        image(topPipeimg,this.x - (this.imageOffset*this.w), 0, this.imageWidth, this.topPipe);
        rect(this.x, height-this.bottom, this.w, this.bottom);
        image(bottomPipeimg, this.x - (this.imageOffset* this.w), height-this.bottom, this.imageWidth, this.bottom);

    }

    this.update = function() {
        this.x -= this.speed

    }

    this.offscreen = function (){
        return this.x < -this.w
    }






}