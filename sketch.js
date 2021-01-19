
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;	

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;

	//Create the Bodies Here.

	bobobject1 = new Bob(200,500,40);
	bobobject2 = new Bob(280,500,40);
	bobobject3 = new Bob(360,500,40);
	bobobject4 = new Bob(440,500,40);
	bobobject5 = new Bob(520,500,40,{restitution:4});


	roof=new Roof(400,100,600,50);

	rope1= new Rope(bobobject1.body,roof.body,-bobDiameter*2,0);
	rope2= new Rope(bobobject2.body,roof.body,-bobDiameter*2,0);
	rope3= new Rope(bobobject3.body,roof.body,-bobDiameter*2,0);
	rope4= new Rope(bobobject4.body,roof.body,-bobDiameter*2,0);
	rope5= new Rope(bobobject5.body,roof.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW)
	 {
		Body.applyForce(bobobject1.body,bobobject5.body.position,{x:-20,y:-20})
	}

	
}


