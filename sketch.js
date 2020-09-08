var ground, crumpledPaper, dustbin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	crumpledPaper = new Paper(100, 100, 30);

	ground = new Ground(400, 650, 800, 25);

	dustbin = new Dustbin(100, 100, 100, 100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  crumpledPaper.display();

  ground.display();

  dustbin.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(crumpledPaper.bodies,crumpledPaper.bodies.position,{x:85, y:-85});
	}
}


