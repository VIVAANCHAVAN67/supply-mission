const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
var world;


function setup (){
   createCanvas(400,400);
   engine=Engine.create();
   world=engine.world;
   ground_options={
    isStatic:true
     }
   ground=Bodies.rectangle(200,380,200,20,ground_options);
   World.add(world,ground)
   ball_options={
       restitution:1.0
   }
   ball=Bodies.circle(200,100,20,ball_options);
   World.add(world,ball)
   Engine.run(engine)
}

function draw (){
    background(0,0,0)
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,200,20);
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20,20)
    
    drawSprites();
}