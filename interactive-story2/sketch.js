/*
Interactive Story - Characters
by Dawn Joseph
MMP 310 
*/

var x = 225;
var y = 225;
var w = 200;
var h = 200;


function setup() {
	createCanvas(800, 400);
    noStroke();
    textSize(40);
    textAlign(CENTER, CENTER);
}

function draw() {
	background(194, 198, 206);
    rectMode(CENTER);
    
    //Character 1 - Pat
    fill(252, 135, 111);
    rect(x, y, w, h + 50); //body
    //left eye
    fill('white');
	ellipse(x - 35, y - 25 , 40);
    fill('black');
	ellipse(x - 28, y - 25 , 20);
     fill('white');
	ellipse(x - 28, y - 25 , 3);
     //right eye
    fill('white');
	ellipse(x + 35, y - 25 , 40);
    fill('black');
	ellipse(x + 40, y - 25 , 20);
     fill('white');
	ellipse(x + 40, y - 25 , 3);
    //mouth
    fill('black');
    arc(x, y + 15, 55, 15, 0, PI); 
    
    
    //Character 2 - Spun
    fill(252, 135, 111);
    triangle(x-75, y-75, x, y-160, x+75, y-75);
    fill(244, 235, 66);
    rect(x+400, y, w, h); //body
    //left eye
    fill('white');
	ellipse(x + 365, y - 25 , 40);
    fill(65, 134, 244);
	ellipse(x + 360, y - 25 , 20);
     fill('black');
	ellipse(x + 360, y - 25 , 10);
    //right eye
    fill('white');
	ellipse(x + 435, y - 25 , 40);
    fill(65, 134, 244);
	ellipse(x + 430, y - 25 , 20);
     fill('black');
	ellipse(x + 430, y - 25 , 10);
    //mouth
    fill(244, 121, 65);
    arc(x + 400, y + 15, 60, 60, 0, PI); 
    
    
    text('Once upon a time, there were two friends Pat and Spun, 200, 200');
    
}

//

