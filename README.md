David Young 

LSU

dyoun57@lsu.edu

CCS 2463 2022


 # Project Documentation  

5/12/2022

## Proejct Outline

For my project I decided to make a simple piong game. The main idea of the pong game is for their to be a paddle that hits a ball, causing it do hit off in different directions. In addition to the graphical aspect of my project, which uses P5.js, I used Tone.js to import sounds and also using the arduino to control physical inputs as well as having information transmitted to the Arudino from P5

# Features
1. Paddle controleld by joystick. 
2. Dynamic Movement of the ball.
3. Timer. 
4. Score. 
5. Buzz when pong ball hits outer bounds. 
6. have a Tone sound whenver ball is hit. 


## Using the Arduino

The arduino Uno was used so that the pong paddle could be controlled by a joystick along with a buzzer that will sound if the pong ball hits the outer bounds. In order for the joystick to move the paddle, I had to map the values recived from the arduino to p5 using the Map() function. In order to get the buzzer to work, I sent the word  "buzzer"  and passed a value used for how long the buzzer should stay active.

###### Schematic 
These two images give a detailed look at how my aurdino was set up to get the physical components working. 

**Joystick**

![Joystick](Joysitck.avif).




**Buzzer**

![Buzzer](buzzer.png).

## Working Product

https://youtu.be/MdHQmXUbjaA

## Further Development 
Developing this project further, I think I would make it a multiplayer game.I would add anothe rpaddle controlled maybe by the keyboard arrows; and have players play against each other for a set amount of time. 


 



--------------------

###### 1/24/22

## Homework 1:

Example 1/ Cricle and Sqaure: https://dyoun57.github.io/CSC2463/CSC%20HW/Example1/

Example 2/ Venn-Diagram: https://dyoun57.github.io/CSC2463/CSC%20HW/Example%202/

Example 3/ Pac-Man and Red Ghost: https://dyoun57.github.io/CSC2463/CSC%20HW/Example%203/

Example 4/ Star in Circle (needs improvment): https://dyoun57.github.io/CSC2463/CSC%20HW/Example%204/

-----------------
## Homework 2:

Paint App: https://dyoun57.github.io/CSC2463/CSC%20HW/Paint%20App/

*Use It To Paint* ????

-----------------




