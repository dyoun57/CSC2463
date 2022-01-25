function setup() {
  createCanvas(800, 400);
}

function draw() {

  background(0);
  
  // The body of the red object
  fill(247, 0, 30);
  square(430, 40, 320, 180, 180, 0, 0);

  //left outer eye
  fill(255, 255, 255)
  circle(675, 175, 100);

  //rght outer eye
  fill(255, 255, 255)
  circle(515, 175, 100);

  //left inner eye
  noStroke();
  fill(0, 64, 255)
  circle(515, 175, 65);

  //right inner eye
  noStroke();
  fill(0, 64, 255)
  circle(675, 175, 65);

//pac-man
  fill(247, 235, 0);
  circle(200, 198, 350);

  fill(0);
  triangle(200, 190, 10, 20, 10, 300);
  
}
