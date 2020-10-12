
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustLeft,dustBottom,dustRight,paper;
function preload()
{
	dustimg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,370,width,20);

	dustbinObj=new Dustbin(1000,350);

	paper=new Paper(100,100,50);
	Engine.run(engine);
  
}


function draw() {
  background(220);

  ground.display();
  paper.display();

  dustbinObj.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-65});
  
	}
}




