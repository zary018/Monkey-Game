
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, invisibleGround
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400)
  monkey = createSprite(40,300,20,20);
  monkey.addAnimation("Monkey_running",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(250,340,500,20);
  ground.velocityX=-6;
  ground.x = ground.width /2;

  //food = createSprite(350,300,50,50);

  foodGroup = createGroup();
  
  score = 0;

}


function draw() {
  background("lightblue");
  textSize(17);
  text("Score: "+ score, 400,60);
  if(keyDown("space") && monkey.y >= 250) {
      monkey.velocityY = -12;
  }
   monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(ground);
   ground.x = ground.width/2;
   
   score = score + Math.round(getFrameRate()/60);

  
  drawSprites();
  food();
  obstacle();
}

function food() {
  if(frameCount % 80 === 0){
     var food = createSprite(350,300,50,50);
     food.y = Math.round(random(120,250))
     food.addImage(bananaImage);
     food.scale=0.15;
     food.lifetime = 100;
     food.velocityX=-5;
     food.depth = monkey.depth;
     monkey.depth = monkey.depth+1;
     foodGroup.add(food); 
  }  
  
  
  
  
  
  
}

function obstacle() {
  if(frameCount % 300 === 0){
     var obstacle = createSprite(350,305,50,50);
     obstacle.addImage(obstaceImage);
     obstacle.scale=0.15 
     obstacle.velocityX=-5;
     obstacle.depth = monkey.depth

 
  }
  



}






