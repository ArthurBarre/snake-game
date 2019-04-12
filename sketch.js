//create our snake object
var s;
// fix unit o
var scl = 20;

//create the scene (context), refresh the scene
function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
}

//make the snake mooving and refresh with update and show function
function draw() {
  background(51);
  s.update();
  s.show();
}

//snake's movement controlled by arrows
function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0)
  }
}
