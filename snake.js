var slc = 20;
//params to set snake's position and his next deplacement (on the left by default).
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;


  //"send" mooving direction to update function
  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  //params to make the snake mooving by the keyPressed and dir function
  this.update = function () {
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - slc)

  }
  //snake params
  this.show = function () {
    fill(66, 105, 225);
    stroke(255);
    rect(this.x, this.y, scl, scl)
  }
}