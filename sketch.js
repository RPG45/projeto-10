var sea, ship;
var seaImg, shipImg;

function preload() {
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png"); //Carregue uma animação com as imagens do barco
}

function setup() {
  createCanvas(400, 400);

  sea = createSprite(400, 200);
  //Carregue a imagem do mar aqui - codigo na plataforma

  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.3;

  ship = createSprite(130, 200, 30, 30);
  //Carregue a animação do barco aqui
  ship.addAnimation("movendo",shipImg);
  ship.scale = 0.25;

}

function draw() {
  background("blue");

  sea.velocityX = -3;

  //código para redefinir o plano de fundo
  if(sea.x<0){
      sea.x = sea.width/8;
  }
  //codigo na plataforma (na plataforma está dividindo por dois, tente dividir por um numero maior para repetir mais rápido)



  drawSprites();
}
