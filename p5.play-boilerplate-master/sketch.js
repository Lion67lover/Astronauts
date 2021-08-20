var ISS,ISSImage,bath,bathImage,bathImage2
var brush,brushImage,drink,drinkImage,eat,eatImage
var exercise1,exercise2,exerciseImage,exerciseImage2
var move,moveImage,sleep,sleepImage
function preload() {
ISSImage = loadImage("iss.png");
bathImage = loadImage("bath1.png");
bathImage2 = loadImage("bath2.png");
brushImage = loadImage("brush.png");
drinkImage = loadImage("drink1.png","drink2.png");
eatImage = loadImage("eat1.png","eat2.png");
exerciseImage = loadImage("gym1.png","gym2.png");
exerciseImage2 = loadImage("gym11.png","gym12.png");
moveImage = loadImage("move.png","move1.png");
sleepImage = loadImage("sleep.png");
}
function setup() {
  createCanvas(800,400);
  ISS = createSprite(200,200,50,50);
  ISS.addImage(ISSImage);
  ISS.scale = 0.2;
  bath = createSprite(40,80,50,50);
  bath.addImage(bathImage);
  bath.scale = 0.06;
  brush = createSprite(250,100,50,50);
  brush.addImage(brushImage);
  brush.scale = 0.05;
  drink = createSprite(290,150,50,50);
  drink.addImage(drinkImage);
  drink.scale = 0.05;
  eat = createSprite(340,120,50,50);
  eat.addImage(eatImage);
  eat.scale = 0.05;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}