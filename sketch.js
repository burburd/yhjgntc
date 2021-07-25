var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
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


function draw() {
  background(180);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createApple()
  createLeaf()
  drawSprites();
}
function createLeaf(){

  if(frameCount%80==0){
  var leaf= createSprite(50,10,2,2);
  leaf.addImage(leafImg);
  leaf.velocityY = 5
  leaf.x=Math.round(random(350,100));
  leaf.scale=0.1
  }
}
function createApple(){
  
  if(frameCount%70==0){

  
  
  
  var apple= createSprite(50,10,2,2);
  apple.addImage(appleImg);
  apple.velocityY = 5

  apple.x=Math.round(random(300,100));
  apple.scale= 0.1
  
    

    
  }
}
