let bar;
let target;

function setup() {
  createCanvas(400, 400);
  target = createVector(width / 2, height / 2)
  bar = new Bar(width / 2, height / 2, target);
}

function draw() {
  background(0);
  bar.update(target);
  strokeWeight(2);
  fill(255, 0, 0);
  ellipse(target.x, target.y, 20, 20);
  if (keyIsDown(RIGHT_ARROW)) {
    target.x = target.x + 2;
  }
  if (keyIsDown(LEFT_ARROW)) {
    target.x = target.x - 2;
  }
  if (keyIsDown(UP_ARROW)) {
    target.y = target.y - 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    target.y = target.y + 2;
  }

  target = createVector(mouseX, mouseY); // Uncomment For Mouse Control
}
