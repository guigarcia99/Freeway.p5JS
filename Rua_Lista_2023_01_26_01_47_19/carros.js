let xCarros=[600,600,600,-100,-100,-100]
let yCarros=[40,96,150, 210, 262, 318]
let velCarros=[2.7, 3.2, 4.5, 5, 3.4, 2.5]

function veCarros(){
  for (let i=0; i<imgCarros.length; i++){
    image(imgCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movCarro(){
  for (let i=0; i<imgCarros.length; i++){
    xCarros[i]-=velCarros[i];
  }
}

function loopCarro(x){
  for (let i=0; i<imgCarros.length; i++){
  if(passaTela(xCarros[i])){
    xCarros[i]=600
    }
  }
}

function passaTela(xCarros){
  return xCarros<-50;
}