
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var canvas,engine,world;
var bob1;
var mConstraint;

function setup() {
	canvas = createCanvas(800,800);

	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse : canvasmouse
	};

	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	bob1 = new Pendulum(250,500,"yellow");
	bob2 = new Pendulum(310,500,"yellow");
	bob3 = new Pendulum(370,500,"yellow");
	bob4 = new Pendulum(430,500,"yellow");
	bob5 = new Pendulum(490,500,"yellow");

	sling1 = new Sling(bob1.body,{x:250,y:200}); 
	sling2 = new Sling(bob2.body,{x:310,y:200});
	sling3 = new Sling(bob3.body,{x:370,y:200});
	sling4 = new Sling(bob4.body,{x:430,y:200});
	sling5 = new Sling(bob5.body,{x:490,y:200}); 
}


function draw() {
  background(0);
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
 
}



