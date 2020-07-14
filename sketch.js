var ground,paper,dustbin,box1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
	dustbin=loadImage("sprites/bin.png");
}
function setup() {
	createCanvas(1500, 700);
    
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	

	ground=new Ground(750,620,1500,50);
	paper=new Paper(50,580,50,50);

	
	
	//box1=createSprite(850,490);
	//box1.addImage(dustbin);
	//box1.scale=0.65;
	box1 = new Box(850,440);
	//box2=new Ground(777,505,20,180);
	//box3=new Ground(923,505,20,180);
}


function draw() {
rectMode(CENTER);
ellipseMode(RADIUS);
  background(255);
  Engine.update(engine);
  //console.log(box1.body.position.x);
  paper.display();
  ground.display();
  box1.display();
  //box2.display();
  //box3.display();
  
  
  
  fill("black");
  text("USE THE CONTROL KEYS TO THROW THE PAPER INTO THE BIN",300,50);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-130});
	}
	else if(keyCode==RIGHT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:0});
	}
	else if(keyCode==LEFT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-50,y:0});
	}
}

