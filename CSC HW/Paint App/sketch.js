
let color;
let y = 0;
function setup() {
  createCanvas(1250, 1000);
  color = 0;
}

function draw() {

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
      if(mouseX > 30)
        {
          mouseClicked();
          coloring();
        }
      else if (mouseY > 330) 
      {
        mouseClicked();
        coloring();
      } 
    }
}

  function mouseClicked()
  {
    push();
    if(mouseX < 30)
      {
        if (mouseY > 0 && mouseY < 30)
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

  function coloring()
  {
    push();
    strokeWeight(7);
    stroke(color);
    line(pmouseX, pmouseY, mouseX, mouseY);
    pop();
    
    
  }
