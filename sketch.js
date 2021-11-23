const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg,ground,gimg;
var runner,runnerImg;
var ice=[];
var maxSnow=100;
var world, engine;
var snow
function preload() {

bg=loadImage("snow2.jpg");
gimg=loadImage("ground.png");
runnerImg=loadImage("boy.png");
  
}

function setup() {
  createCanvas(800,400);
engine=Engine.create();
  world=engine.world;
  Engine.run(engine);

ground=createSprite(650,670);
//ground.addImage("bg",gimg);
ground.scale=3.2;
ground.velocityX=-10;

  runner=createSprite(150,480);
 // runner=addImage("runner",runnerImg);
  runner.scale=1.1;
  runner.velocityX=2;
  runner.setCollider("rectangle",15,-20,100,180);
snow = new Snow(100,100)
  
    
 
}

function draw() {
  background(bg);
  Engine.update(engine);
  if(ground.x < 530){
    ground.x=600;
  }

  if(runner.x > 1200){
    runner.x=150;
  }

  if(keyWentDown("space")&& runner.y >= 100) {
    runner.velocityY = -12;
}

//add gravity
runner.velocityY = runner.velocityY + 0.8

  for(var i = 0;i < maxSnow;i++){
    snow.display()
    snow.changePosition()
    }    
    


ground.display();
  
  runner.collide(ground);
  
  drawSprites();
}