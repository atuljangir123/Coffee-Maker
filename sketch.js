var  start, play, milk, milktext;
var sugar, sugartext, boiling, boilingtext;
var powder, powdertext, jug, jugtext;
var coffee, drink, drink1;

function preload(){
 sugarImg = loadImage("sugar.png");
 startImg = loadImage("maker.jpg");
 playImg = loadImage("play.png");
 milkImg = loadImage("milk.png");
 boilingImg = loadImage("hot.png");
 powderImg = loadImage("powder.png");
 jugImg = loadImage("ready.png");
 coffeeImg = loadImage("coffee.png"); 
 drinkImg = loadImage("coffee-.gif");
 drinImg = loadImage("coffee2.jpg");
 backgroundImg = loadImage("background.png");
 text1 = loadImage("milk t.png");
 text2 = loadImage("sugar t.png");
 text3 = loadImage("hot t.png");
 text4 = loadImage("powder t.png");
 text5 = loadImage("mug t.png");
 drinkC = loadSound("coffee.wav");

}

function setup() {
  createCanvas(600, 600);
  
 start = createSprite(300,300);
 start.addImage(startImg);
 start.scale=0.6;

 play = createSprite(500,420);
 play.addImage(playImg);
 play.scale=0.1;

    milk = createSprite(200,450);
    milk.addImage(milkImg);
    milk.scale=0.2;
    milk.visible=false;
   
    milktext = createSprite(200,300);
    milktext.addImage(text1);
    milktext.scale=0.2;
    milktext.visible=false;

    sugar= createSprite(400,300);
    sugar.addImage(sugarImg);
    sugar.scale=0.2;
    sugar.visible=false;

    sugartext = createSprite(400,200);
    sugartext.addImage(text2);
    sugartext.scale=0.2;
    sugartext.visible=false;

    boiling= createSprite(250,300);
    boiling.addImage(boilingImg);
    boiling.scale=0.2;
    boiling.visible=false;

    boilingtext = createSprite(250,200);
    boilingtext.addImage(text3);
    boilingtext.scale=0.2;
    boilingtext.visible=false;

    powder= createSprite(300,500);
    powder.addImage(powderImg);
    powder.scale=0.2;
    powder.visible=false;

    powdertext = createSprite(300,400);
    powdertext.addImage(text4);
    powdertext.scale=0.2;
    powdertext.visible=false;

    jug= createSprite(100,100);
    jug.addImage(jugImg);
    jug.scale=0.2;
    jug.visible=false;

    jugtext = createSprite(100,200);
    jugtext.addImage(text5);
    jugtext.scale=0.2;
    jugtext.visible=false;

    coffee= createSprite(530,100);
    coffee.addImage(coffeeImg);
    coffee.scale=0.4;
    coffee.visible=false;

    drink1= createSprite(300,300);
    drink1.addImage(drinImg);
    drink1.scale=0.5;
    drink1.visible=false;

    drink= createSprite(510,550);
    drink.addImage(drinkImg);
    drink.scale=0.2;
    drink.visible=false;
  }

function draw() {
  background(backgroundImg);

  if(mousePressedOver(play) || touches.length>0){

    start.visible=false;
    play.visible=false;

    milktext.visible=true;
    milk.visible=true;

    touches = []

  }
 
  if(mousePressedOver(milk) || touches.length>0){
    
 
    milk.visible=false;
    milktext.visible=false;

    boiling.visible=true;
    boilingtext.visible=true;

    touches = []

  }

  if(mousePressedOver(boiling) || touches.length>0){
    
 
    boiling.visible=false;
    boilingtext.visible=false;

    sugar.visible=true;
    sugartext.visible=true;

    touches = []

  }
  
  if(mousePressedOver(sugar) || touches.length>0){
    
 
    sugar.visible=false;
    sugartext.visible=false;

    powder.visible=true;
    powdertext.visible=true;

    touches = []

  }

  if(mousePressedOver(powder) || touches.length>0){
    
 
    powder.visible=false;
    powdertext.visible=false;

    jug.visible=true;
    jugtext.visible=true;

    touches = []

  }

  if(mousePressedOver(jug) || touches.length>0){
    
 
    jug.visible=false;
    jugtext.visible=false;

    coffee.visible=true;

    drinkC.play();

    touches = []

  }

  if(mousePressedOver(coffee) || touches.length>0){
    
 
    coffee.visible=false;

    drink.visible=true;
    drink1.visible=true;


    touches = []

  }

  drawSprites();
}