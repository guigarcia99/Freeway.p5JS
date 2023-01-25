let imgPlayer;
let yBoi=366;
let xBoi=100;

function veBoi(){
  image(imgPlayer, xBoi, yBoi, 25, 25);
}

function movBoi(){
  if (keyIsDown(87)){
    yBoi-=3
  }
  if (keyIsDown(83)){
    yBoi+=3
  }
}