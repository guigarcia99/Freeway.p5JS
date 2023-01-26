let imgPlayer;
let yBoi=366;
let xBoi=150;
let bate = false;
let myPt=0;

function veBoi(){
  image(imgPlayer, xBoi, yBoi, 25, 25);
}

function movBoi(){
  if (keyIsDown(87)){
    yBoi-=3
  }
  if (keyIsDown(83)){
    if(trava())
    yBoi+=3
  }
}

function bateBoi(){
  for (let i=0; i<imgCarros.length; i++){
    bate=collideRectCircle(xCarros[i], yCarros[i], 50, 40, xBoi, yBoi, 15)
    if (bate){
      bateu();
        if(ptPositivo()){
          myPt-=1;
      }
    }
  }
}

function bateu(){
  yBoi=366;
  colidiu.play();
}

function marcaPt(){
  textAlign(CENTER);
  textSize(25);
  fill(223, 255, 0);
  text(myPt, width/5, 27);
}

function addPt(){
  if (yBoi<5){
    myPt+=1;
    yBoi=366;
    pontos.play();
  }
}

function ptPositivo(){
  return myPt>0;
}

function trava(){
  return yBoi<366;
}