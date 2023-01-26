function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(imgRua);
  veBoi();
  veCarros();
  movCarro();
  movBoi();
  loopCarro();
  bateBoi();
  marcaPt();
  addPt();
}
