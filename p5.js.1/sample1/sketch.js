let speed


function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background(0);
  
  translate(width/2,height/2);
  fill(255,0,0);
  ellipse(0,0,100,100);
  
  rotate(frameCount*0.01);
  fill("#FFFF00");
  ellipse(0,90,20,20);
  
  rotate(frameCount*0.01);
  fill("#00FF00");
  ellipse(120,0,30,30);
  
  rotate(frameCount*0.01);
  fill("#4040FF");
  ellipse(200,0,50,50);
  
  translate(200,0)
  rotate(frameCount*0.1);
  fill(255);
  ellipse(27,27,8,8);
}

