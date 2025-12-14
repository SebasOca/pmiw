//Enlace:

let pantallaActiva;
let fondoInicio, decoInicio, cartel;
let fondo, pueblo, camino, arbolMeta;
let burroImg, perseguidor, obstaculo1, obstaculo2, cartelVidas;
let fuente;



function preload() {
  fondoInicio = loadImage ("data/fondoInicio.png");
  decoInicio = loadImage ("data/decoInicio.png");
  cartel = loadImage ("data/cartel1.png");
  
  fondo = loadImage("data/fondo.png");
  pueblo = loadImage("data/pueblo.png");
  camino = loadImage("data/camino.png");
  arbolMeta = loadImage("data/arbolMeta.png");
  cartelVidas = loadImage("data/cartelVidas.png");
  fuente = loadFont('/data/fingerPaint.ttf');
  soundFormats ('mp3');
  soundtrack = loadSound("data/soundtrack.mp3");

  burroImg = loadImage("data/burro.png");
  perseguidorImg = loadImage("data/perseguidor.png");
  obstaculo1Img = loadImage("data/obstaculo1.png");
  obstaculo2Img = loadImage("data/obstaculo2.png");
}

function setup() {
  createCanvas(640, 480);
  pantallaActiva = new PantallaActiva();
}


function draw() {
  background (240, 235, 229);
  pantallaActiva.dibujar();
}

function mouseClicked() {
  pantallaActiva.mousePresionado();
  
  
}


function keyPressed() {
  pantallaActiva.teclaPresionada();
}
