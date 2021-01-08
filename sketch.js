var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodsGroup, obstaclesGroup
var score

function preload() {

  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png")

}

function setup() {

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;

  obstaclesGroup = createGroup();
  FoodsGroup = createGroup();

  var SurvivalTime = 0;
  
  console.log(monkey.y)

}

function draw() {
  background("white");

  if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime = Math.ceil(frameCount / frameRate())
  text("SurvivalTime:" + SurvivalTime, 130, 50);

  foods();
  obstacles();

  monkey.collide(ground);

  drawSprites();
}

function foods() {

  if (frameCount % 80 === 0) {
    banana = createSprite(420, 315, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;

    banana.lifetime = 210;

    FoodsGroup.add(banana);
  }
}

function obstacles() {

  if (frameCount % 300 === 0) {
    obstacle = createSprite(400, 320, 40, 10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;

    obstacle.lifetime = 210;

    obstaclesGroup.add(obstacle);
  }
}

