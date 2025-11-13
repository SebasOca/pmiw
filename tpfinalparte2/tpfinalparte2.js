let juego;
let puebloFondo;


/*function preload() {
  puebloFondo = loadImage("data/fondo" + i + ".png");
}*/

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  juego.iniciar();
}


function draw() {
  background (250, 244, 182);
  //image(puebloFondo, 0, 0, 640, 480);
  juego.dibujar();
}

function keyPressed() {
  juego.teclaPresionada();
}
