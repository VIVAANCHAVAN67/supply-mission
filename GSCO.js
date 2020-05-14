var car,wall;
var speed,weight


function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(100, 200, 80, 50);
  car.shapeColor="white"; 
  car.velocityX=speed;
  wall = createSprite(1500,200,60,750);
  wall.shapeColor='white';

}



function draw() {
  background(0,0,0);
   
  if (isTouching(car,wall)){
    console.log("check")
    car.velocityX=0;
    var deformation= 0.5 * weight * speed * speed / 22500;

   if(deformation>180){
   car.shapeColor=color(255,0,0);
   }

   if(deformation<180 && deformation>100){
     car.shapeColor=color(230,230,0);
   }

   if(deformation<100){
     car.shapeColor=color(0,255,0);
   }
    } 

      drawSprites ();
}
