var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

var rand =  Math.round(random(1,100))
  console.log(rand)

function draw() {
  background(0);
  

  // jump when the space key is pressed
  if(keyDown("left")&& rabbit.x >= -100) {
    rabbit.velocityX = -10;
  }

  if(keyDown("right")&& rabbit.x >= 100) {
    rabbit.velocityX = 10;
    }

    rabbit.velocityX = rabbit.velocityX + 0.8

  edges= createEdgeSprites();
  rabbit.collide(edges);


spawnApples()

  drawSprites();}
  
  function spawnApples(){
    if(frameCount%80===0){
      apple=createSprite(100,100,5,5);
      apple.addImage(appleImg);
      apple.x=Math.round(random(10,60))
      apple.velocityy=-3;
      apple.depth=rabbit.depth
      rabbit.depth=rabbit.depth+1
      apple.scale = 0.4
    }  
  }
