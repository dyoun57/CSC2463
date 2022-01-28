
let color = 0;
let y = 0;
let button;

let x = 6;
function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('Reset Canvas');
  button.position(windowHeight - 102, 0);
  button.mousePressed(resetSketch);

  button = createButton('Brush Size Up');
  button.position(windowHeight, 0);
  button.mousePressed(brushSizeUp);

  button = createButton('Brush Size Down');
  button.position(windowHeight + 102, 0);
  button.mousePressed(brushSizeDown);
  
}

function draw() {

  // Belwo is the color pallet that shows on the left han side of the screen.
  fill('red');
  rect(0 , y, 30, 30);
  
  fill(255, 159, 48);
  rect(0 , y + 33, 30,30);
  
  fill(251, 255, 0);
  rect(0 , y + 33 * 2, 30, 30);
  
  fill(22, 219, 75);
  rect(0 , y + 33 * 3, 30, 30);
  
  fill('blue');
  rect(0 , y + 33 * 4, 30, 30);
  
  fill('cyan');
  rect(0 , y + 33 * 5, 30, 30);
  
  fill('magenta');
  rect(0 , y + 33 * 6, 30, 30);
  
  fill(145, 114, 41);
  rect(0 , y + 33 * 7, 30, 30);
  
  fill('black');
  rect(0 , y + 33 * 8, 30, 30);
  
  fill('white');
  rect(0 , y + 33 * 9 ,30, 30);
  
  
    
  if(mouseIsPressed)
    {
      if(mouseX > 30) // makes it so that you cant paint under the color pallet 
        {
          mouseClicked();
          coloring();
        }
      else if (mouseY > 330) // makes it so that you can paint below the color pallet 
      {
        mouseClicked();
        coloring();
      } 
    }


}

  function mouseClicked(){
    push();             // the if, else of statmenst below change the color based on if the mouse is clciked at certain (x,y) cordinate based on the color box
    if(mouseX < 30)
      {
        if (mouseY > 0 && mouseY < 33)
          color = 'red';
        else if (mouseY > 33 && mouseY < 33 * 2)
        {
          color = [255, 159, 48];
        }
        else if (mouseY > 33 && mouseY < 33 * 3)
        {
          color = [251, 255, 0];
        }
        else if (mouseY > 33 && mouseY < 33 * 4)
        {
          color = [22, 219, 75];
        }
        else if (mouseY > 33 && mouseY < 33 * 5)
        {
          color = 'blue';
        }
        else if (mouseY > 33 && mouseY < 33 * 6)
        {
          color = 'cyan';
        }
        else if (mouseY > 33 && mouseY < 33 * 7)
        {
          color = 'magenta';
        }
        else if (mouseY > 33 && mouseY < 33 * 8)
        {
          color = [145, 114, 41];
        }
        else if (mouseY > 33 && mouseY < 33 * 9)
        {
          color = 'black';
        }
        else if (mouseY > 33 && mouseY < 33 * 10)
        {
          color = 'white';
        }
      }
      pop();
  }

// Funciton to make the line appear when the mouse is clicked
  function coloring(){
    push();
    
    strokeWeight(x);
    stroke(color);
    line(pmouseX, pmouseY, mouseX, mouseY);
    pop();
    
  }

  //function below clears the canvas 
  function resetSketch(){
    clear();
  }

  function brushSizeUp(){

    if(x < 10)

    x++;

  }

  function brushSizeDown() {
    if ( x > 1)
    {
      x--;
    }


  }
