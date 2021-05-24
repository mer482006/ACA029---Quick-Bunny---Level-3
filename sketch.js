function preload(){
  bg = loadImage("images/bg.png");
  rabbitImage = loadImage("images/bunnyImg.png");
  snakeImage = loadImage("images/snake.png");
  carrotImage = loadImage("images/carrot.png");
  }
  function setup() {
  createCanvas(600,600);
  
  rabbit = createSprite(40,550,15,15); 
  rabbit.addImage(rabbitImage);
  rabbit.scale=0.2;
  
  carrot = createSprite(545,75,30,30);
  carrot.addImage(carrotImage);
  carrot.scale=0.17;
  
  brick1 = createSprite(80,280,120,18);
  brick2 = createSprite(10,350,120,18);
  brick3 = createSprite(190,350,120,18);
  brick4 = createSprite(370,350,120,18);
  brick5 = createSprite(550,350,120,18);
  brick6 = createSprite(730,350,120,18);
  brick7 = createSprite(260,280,120,18);
  brick8 = createSprite(440,280,120,18);
  brick9 = createSprite(610,280,120,18);

  snakeGroup= new Group();
  
  rabbit.shapeColor="darkSeaGreen"
  carrot.shapeColor="lightSalmon"
  brick1.shapeColor="tomato"
  brick2.shapeColor="tomato"
  brick3.shapeColor="tomato"
  brick4.shapeColor="tomato"
  brick5.shapeColor="tomato"
  brick6.shapeColor="tomato"
  brick7.shapeColor="tomato"
  brick8.shapeColor="tomato"
  brick9.shapeColor="tomato"
  }
  function draw() {
  background(bg); 
  
  generateSnakes();
  
  if(keyDown("up")){
  rabbit.y=rabbit.y-3;
  }
  
  if(keyDown("down")){
  rabbit.y=rabbit.y+3;
  }
  
  if(keyDown("left")){
  rabbit.x=rabbit.x-3;
  }
  
  if(keyDown("right")){
  rabbit.x=rabbit.x+3;
  }
  
  if(rabbit.isTouching(carrot)){
  text("YOU WIN",200,200);
  }
  
  if(rabbit.isTouching(brick1)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick2)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick3)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick4)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick5)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick6)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick7)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick8)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick9)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  for(var i = 0 ; i< (snakeGroup).length ;i++){
  var temp = (snakeGroup).get(i) ;
  if (rabbit.isTouching(temp)) {
  rabbit.x=40;
  rabbit.y=550;
  } 
  }
  
  drawSprites();
  }
  
  function generateSnakes(){
  if(frameCount % 60===0){
  var snake = createSprite(600,random(70,520),random(30,120),5);
  snake.addImage(snakeImage);
  snake.scale=random(0.1,0.3);
  snake.shapeColor="yellow"
  snake.velocityX=-6;
  snakeGroup.add(snake);
  }
  }
  
