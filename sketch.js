const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground; 
var engine, world;
function setup(){
    createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(650,200,800,20)
    ball = new Ball(400,300,80,80);
    ball1 = new Ball(600,300,80,80);
    ball2 = new Ball(800,300,80,80);
    ball3 = new Ball(1000,300,80,80);
    ball4 = new Ball(1200,300,80,80);
    rope = new Rope(ball.body,ground.body,0,0);
    rope1 = new Rope(ball1.body,ground.body,55,0)
    rope2 = new Rope(ball2.body,ground.body,110,0)
    rope3 = new Rope(ball3.body,ground.body,165,0)
    rope4 = new Rope(ball4.body,ground.body,220,0);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    ball.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    rope.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x : mouseX, y : mouseY});
}