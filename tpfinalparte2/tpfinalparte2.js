let juego, fondo, pueblo, camino;
let burroImg, perseguidor, obstaculo1, obstaculo2, obstaculo3;


function preload() {
  fondo = loadImage("data/fondo.png");
  pueblo = loadImage("data/pueblo.png");
  camino = loadImage("data/camino.png");
  burroImg = loadImage("data/burro.png");
  perseguidorImg = loadImage("data/perseguidor.png");
  obstaculo1Img = loadImage("data/obstaculo1.png");
  obstaculo2Img = loadImage("data/obstaculo2.png");
  obstaculo3Img = loadImage("data/obstaculo3.png");
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  juego.iniciar();
}


function draw() {
  background (250, 244, 182);
  image(fondo, 0, 0, 640, 480);
  image(pueblo, 0, 0, 640, 480);
  image(camino, 0, 0, 640, 480);
  juego.dibujar();
}

function keyPressed() {
  juego.teclaPresionada();
}
