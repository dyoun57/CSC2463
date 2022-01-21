function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 15, 150);

  fill(255);
  circle(200, 200, 200);


  noStroke();
  fill(35, 140, 11);
  circle(200, 200, 190);
  
  fill(255);
  noStroke();
  beginShape();
  vertex(205, 87); //top
  vertex(235, 170);
  vertex(301, 165); //right
  vertex(235, 210);
  vertex(270, 278); //botom right
  vertex(205, 247);
  vertex(130, 278);// bottom left
  vertex(168, 210);
  vertex(95, 165); // left
  vertex(168, 170); 
  endShape();

  fill(237, 34, 93);
  noStroke();
  beginShape();
  vertex(205, 92); //top
  vertex(230, 173);
  vertex(299, 165); //right
  vertex(230, 210);
  vertex(266, 272); //botom right
  vertex(205, 243);
  vertex(135, 272);// bottom left
  vertex(172, 210);
  vertex(103, 168); // left
  vertex(172, 173); 
  endShape();

  fill(255, 255, 255);
  text("("+mouseX+","+mouseY+")", mouseX, mouseY);
  
}