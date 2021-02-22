const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint; 

var ground1,ground2;
var ropeObj;
var bowlingball;
var pin1,pin2,pin3,pin4,pin5,pin6,pin7,pin8,pin9,pin10,pin11;

function preload(){
    
}

function setup() {
  createCanvas(1100,600);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground1 = new Ground(550,500,1100,20);
  ground2 = new Ground(550,150,1100,20);

  pin1 = new Pin(110,462,40,50);
  pin2 = new Pin(160,462,100,100);
  pin3 = new Pin(210,410,100,100);
  pin4 = new Pin(110,402,100,100);
  pin5 = new Pin(160,402,100,100);
  pin6 = new Pin(210,402,100,100);
  pin7 = new Pin(110,342,100,100);
  pin8 = new Pin(160,342,100,100);
  pin9 = new Pin(210,342,100,100);
  //pin10 = new Pin(180,550,100,100);
  //pin11 = new Pin(150,600,100,100);

  bowlingball = new Ball(500,500,40,40);
  ropeObj = new rope(bowlingball.body,{x:900,y:280});
}

function draw() {
  background("white"); 
  Engine.update(engine);

  textSize(35)
  text("Welcome to bowling game",200,60)

  ground1.display();
  ground2.display();

  bowlingball.display();
  ropeObj.display();
  
  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  pin6.display();
  pin7.display();
  pin8.display();
  pin9.display();
  //pin10.display();
  //pin10.display();
  //pin11.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bowlingball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  ropeObj.fly()
}