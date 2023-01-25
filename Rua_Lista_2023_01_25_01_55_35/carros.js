let xCarros=[600,600,600]
let yCarros=[40,96,150]
let velCarros=[2.7, 3.2, 4.5]

function veCarros(){
  for (let i=0; i<imgCarros.length; i=i+1){
    image(imgCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movCarro(){
  for (let i=0; i<imgCarros.length; i=i+1){
    xCarros[i]-=velCarros[i];
  }
}

function loopCarro(x){
  for (let i=0; i<imgCarros.length; i=i+1){
  if(passaTela(xCarros[i])){
    xCarros[i]=600
    }
  }
}

function passaTela(xCarros){
  return xCarros<-50;
}