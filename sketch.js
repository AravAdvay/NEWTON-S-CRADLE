
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rod1 = new Rod(350,200,400,30);
	rod2 = new Rod(400,689,800,20);
	
	circle1 = new Circle(50,250,50);
	circle2 = new Circle(300,450,50);
	circle3 = new Circle(350,450,50);
	circle4 = new Circle(400,450,50);
	circle5 = new Circle(450,450,50);

	string1 = new String(circle1.body,{x:250,y:200});
	string2 = new String(circle2.body,{x:300,y:200});
	string3 = new String(circle3.body,{x:350,y:200});
	string4 = new String(circle4.body,{x:400,y:200});
	string5 = new String(circle5.body,{x:450,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  rod1.display();
  rod2.display();
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();

  
/*
  if (mousePressedOver(circle1)) {
		circle1.x = MouseX;
		circle1.y = MouseY;
	}*/
  //drawSprites();

  //mousePressedOver(sprite)

 
}
/*
function MousePressed () {

	if (mousePressedOver(circle1)) {
		circle1.x = MouseX;
		circle1.y = MouseY;
	}
}*/

