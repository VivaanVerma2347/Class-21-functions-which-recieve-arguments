var gameObject1,gameObject2,gameObject3,gameObject4;
var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
   fixedRect = createSprite(200,200,50,80);
   movingRect = createSprite(400,200,80,30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);

  gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";
  gameObject3.shapeColor="green";
  gameObject4.shapeColor="pink";

  gameObject1.velocityX=2;
  gameObject4.velocityX=-3;
}

function draw() {
  background(0,0,0);
 
bounceOff(gameObject1,gameObject4);

  movingRect.x=World.mouseX;  
  movingRect.y=World.mouseY;

  if (isTouching(movingRect,gameObject3)) {
    gameObject3 .shapeColor="blue";
    movingRect.shapeColor="blue";
  }
else {
  gameObject3.shapeColor="green";
  movingRect.shapeColor="green";
}
  drawSprites();
}

