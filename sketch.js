
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball,rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball (200,200,80,80);
	ball1 = new Ball(100,200,80,80);
	ball2 = new Ball(50,200,80,80);
	rope = new Rope(ball.body,{x:500,y:50});
	rope1 = new Rope(ball1.body,{x:400,y:50});
	rope2 = new Rope(ball2.body,{x:350,y:50});

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  rope.display();
  rope1.display();
  rope2.display();
  ball1.display();
  ball2.display();
  ball.display();

  if(keyDown("space")){
	ball.isStatic;  
}           
  
  drawSprites();
 
}
function mouseDragged(){
//	Matter.Body.setPosition(ball.body,{x: mouseX, y:mouseY});
  }



