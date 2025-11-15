let juego;
let fondo;
let pueblo;
let camino;


function preload() {
  fondo = loadImage("data/fondo.png");
  pueblo = loadImage("data/pueblo.png");
  camino = loadImage("data/camino.png");
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  juego.iniciar();
}


function draw() {
  background (250, 244, 182);
  juego.dibujar();
}

function keyPressed() {
  juego.teclaPresionada();
}
