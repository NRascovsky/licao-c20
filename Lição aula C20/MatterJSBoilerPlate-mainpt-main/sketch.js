
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1, block2, block3;
var plane;
var engine;
function preload()
{
	
}

function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Crie os Corpos Aqui.
var plane_options = {
	isStatic: true
}
plane = Bodies.rectangle(600,580,1200,2,plane_options);
World.add(world,plane)

var block1_options = {
	restitution:0.5,
  friction:0.02,
  frictionAir:0
}

var block2_options = {
	restitution:0.7,
  friction:0.01,
  frictionAir:0.1
}

var block3_options = {
	restitution:0.01,
  friction:1,
  frictionAir:0.3
}

  
  block1 = Bodies.circle(220,10,10,block1_options);
  World.add(world,block1)

  block2 = Bodies.circle(220,10,10,block2_options);
  World.add(world,block2)
  
  block3 = Bodies.circle(220,10,10,block3_options);
  World.add(world,block3)

  fill("gold");
  rectMode (CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  Engine.update(engine);
  ellipse(block1.position.x,block1.position.y,30)
  rect(plane.position.x,plane.position.y,1200);
  rect(block2.position.x,block2.position.y,50,50);
  rect(block3.position.x,block3.position.y,100,50);
  drawSprites();
 
}



