var moverec,fixrec;

var car,wall;


function setup() {
  createCanvas(800,400);
  fixrec=createSprite(400, 200, 50, 50);
  moverec=createSprite(300, 200, 50, 100);
  fixrec.shapeColor="yellow";
   moverec.shapeColor="green";

   car=createSprite(200, 200, 50, 50);
   wall=createSprite(700, 200, 50, 100);
  car.velocityX=10;

}

function draw() {
  background(0);  
  
  moverec.x=World.mouseX;
  moverec.y=World.mouseY;

 
  istouching();
   bounceOff();
  drawSprites();


}

function istouching(){





 
}

}

function bounceOff(){

  if(car.x-wall.x<car.width/2+wall.width/2&&wall.x-car.x<car.width/2+wall.width/2){
     car.velocityX=car.velocityX *-1;
    

  }

  if(car.y-wall.y<car.height/2+wall.height/2&&wall.y-car.y<car.height/2+wall.height/2){
    car.velocityY=car.velocityY *-1;
   

 }

}


