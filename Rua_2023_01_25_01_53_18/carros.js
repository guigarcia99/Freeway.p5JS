let xCarro1=600;
let yCarro1=40;
let xCarro2=600;
let yCarro2=96;
let xCarro3=600;
let yCarro3=150;
let velCarro1=2.7;
let velCarro2=3.2;
let velCarro3=4.5;

function veCarros(){
  image(imgCarro1, xCarro1, yCarro1, 50, 40)
  image(imgCarro2, xCarro2, yCarro2, 50, 40)
  image(imgCarro3, xCarro3, yCarro3, 50, 40)
}

function movCarro(){
  xCarro1-=velCarro1
  xCarro2-=velCarro2
  xCarro3-=velCarro3
}

function loopCarro(x){
  if( xCarro1 < -60){
    xCarro1=600
  }
  if( xCarro2 < -60){
    xCarro2=600
  }
  if( xCarro3 < -60){
    xCarro3=600
  }
}