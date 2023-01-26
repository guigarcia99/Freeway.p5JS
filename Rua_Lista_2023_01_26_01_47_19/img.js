let imgRua;
let imgCarro1;
let imgCarro2;
let imgCarro3;
let colidiu;
let trilha;
let pontos;

function preload(){
  imgRua=loadImage("Material/estrada.png")
  imgPlayer=loadImage("Material/ator-1.png")
  imgCarro1=loadImage("Material/carro-1.png")
  imgCarro2=loadImage("Material/carro-2.png")
  imgCarro3=loadImage("Material/carro-3.png")
  colidiu=loadSound("Material/colidiu.mp3");
  trilha=loadSound("Material/trilha.mp3");
  pontos=loadSound("Material/pontos.wav");
  imgCarros=[imgCarro1, imgCarro2, imgCarro3,imgCarro3,imgCarro1,imgCarro2];
}

