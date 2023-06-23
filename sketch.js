function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("white");
  fill ("black");
  textSize (68);
  textAlign (CENTER, CENTER);
  
  let maximo = width;
  let monimo = 0;
  let palavra = "fisica e dificil  viu"; 
  let letras = map (mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0, letras)
  text (parcial, 250, 250);
}