
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15;
var bird;
var slingshot;


function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    stand1 = new Ground(610,height/2,215,20);
    stand2 = new Ground(1010,height/4,215,20);
    box1 = new Box(605,20,20,20);
    box2 = new Box(610,20,20,20);
    box3 = new Box(615,20,20,20);
    box4 = new Box(620,20,20,20);
    box5 = new Box(620,20,20,20);
    box6 = new Box(625,20,20,20);
    box7 = new Box(1005,20,20,20);
    box8 = new Box(1010,20,20,20);
    box9 = new Box(1015,20,20,20);
    box10 = new Box(1020,20,20,20);
    box11 = new Box(1025,20,20,20);
    box12 = new Box(1030,0,20,20);
    box13 = new Box(1005,0,20,20);
    box14 = new Box(1010,0,20,20);
    box15 = new Box(1015,0,20,20);
    bird = new Bird(400,100);
    ground = new Ground(600,500,1200,400);
    slingshot = new SlingShot(bird.body,{x:200, y:100});

}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    stand1.display();
    stand2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    bird.display();
    slingshot.display();

    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}