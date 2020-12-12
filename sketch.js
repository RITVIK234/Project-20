var wall,car;
var speed,weight;
var deformation;

function setup() {
  createCanvas(windowWidth,windowHeight);

  wall=createSprite(windowWidth-100,windowHeight/2, 60, windowHeight/2);

  speed=random(55,90);
  weight=random(400,1500);
  
  car=createSprite((windowWidth/windowWidth)+100,windowHeight/2, 100, 100);
  car.shapeColor="white";
  
  deformation=(0.5*weight*speed*speed)/22500;

}

function draw() {
  background("black"); 

  car.velocityX=speed;

  if(car.x>wall.x-(car.width/2+wall.width/2)
  &&car.x<wall.x+(car.width/2+wall.width/2)
  &&car.y>wall.y-(car.height/2+wall.height/2)
  &&car.y<wall.y+(car.height/2+wall.height/2)){

  car.velocityX=0;

  if(deformation>180){
  car.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100){
  car.shapeColor=color(255,255,0);
  }

  if(deformation<100){
  car.shapeColor=color(0,255,0);
  }

  if(keyDown("space")){
  car.x=100;
  car.velocityX=speed;
  car.shapeColor="white";
  }

  }
  drawSprites();
}