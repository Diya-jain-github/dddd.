var bg;
var frozen, frozenImg ;

function preload(){
bg = loadImage("snow3.jpg");
frozen = loadImage("frozen.png");
}



function setup() {
  createCanvas(800,400);
  
  var frozen =  createSprite(400, 200, 50, 50);  
}

function draw() {
  background(bg);  
  frozen.addImage(frozenImg);
 scale(0.4);
  drawSprites();
}