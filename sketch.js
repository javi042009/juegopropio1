var  bala;
var  espada;
var fondo;
var iron1;
var iron2;
var iron3;
var spider1;
var spider2;
var spider3;
var pistola;
var pistola1;
var player1;
var player2;

function preload(){
  bala = loadImage("bala.gif");
  espada =loadImage("espada.png");
  fondo = loadImage("fondo.gif");
  iron1=loadImage("ironman1.gif");
  iron2=loadImage("ironman2.gif");
  iron3=loadImage("ironman3.gif");
  pistola=loadImage("pistola.png");
  pistola1=loadImage("pistola1.png");
  spider1=loadImage("spider1.gif");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  player1 = createSprite(300,600,150,150);
  player1.addImage(spider1);
  player1.scale=0.7;
  player2 = createSprite(1300,600,150,150);
  player2.addImage(iron3);
  player2.scale = 0.7;

}

function draw() {
  background("purple");
  image(fondo,0,0,width,height);
  armas();
  drawSprites();
}

function aliensclaselite(){
  
}

function armas(){
  var armaPlayer1=createSprite(400,610,75,75);
  var armaPlayer2=createSprite(1200,550,75,75);
  var rand=Math.round(random(1,6));
  switch(rand){
    case 1: armaPlayer1.addImage(pistola);
            break;
    case 2 : armaPlayer1.addImage(espada);
             break;
    case 3 : armaPlayer1.addImage(pistola1);
             break;
    case 4: armaPlayer2.addImage(pistola);
             break;
    case 5 : armaPlayer2.addImage(espada);
             break;
    case 6 : armaPlayer2.addImage(pistola1);
             break;
  }
  
}