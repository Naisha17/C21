var fixedRect, movingRect;
var game1, game2, game3, game4;
function setup() {
  createCanvas(1200,800);
  fixedRect =  createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  game1 = createSprite(100,100,50,50);
  game1.shapeColor = "green";
  game2 = createSprite(150,150,50,50);
  game2.shapeColor = "green";
  game3 = createSprite(200,200,50,50);
  game3.shapeColor = "green";
  game4 = createSprite(250,250,50,50);
  game4.shapeColor = "green";
  
}

function draw() {
  background("purple"); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);

  if (isTouching(movingRect,game4)){
    movingRect.shapeColor = "red"; 
    game4.shapeColor = "red";
  
  }

  else {
    movingRect.shapeColor = "green"; 
    game4.shapeColor = "green";
  
  }

  drawSprites();
}

