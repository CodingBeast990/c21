
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var left, right;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	var ball_options={
		isStatic:false, 
		restituition:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(100,100, 20, ball_options);
	World.add(world,ball);

	groundObj = new Ground(width/2, 550, width, 40);
	left = new Ground(1100, 470, 20, 120);
	right = new Ground(1300, 470, 20, 120);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 40, 40);
  groundObj.display();
  left.display();
  right.display();


 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Body.applyForce(ball, ball.position, {x: 110, y:-70});
	}
}



