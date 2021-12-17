
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		densidy:1.2
	}
	//Create the Bodies Here.
var box={isStatic:true}
	ball=Bodies.circle(200,450,70,ball_options )
 World.add(world,ball)

 ground=Bodies.rectangle(400,680,800,10, box)
 World.add(wrold,ground)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



