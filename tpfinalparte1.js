let fuente;
let textos;
let cartel1;
let cartel2;
let imagenesFondo = [];
let numFondo = 0;
let cant = 15;
let lineaTexto = -1;

function preload() {
  fuente = loadFont('/data/fingerPaint.ttf');
  textos = loadStrings('/data/textos.txt');
  cartel1 = loadImage("data/cartel1.png");
  cartel2 = loadImage("data/cartel2.png");

  for (let i=0; i<=cant; i++) {
    imagenesFondo[i] = loadImage("data/fondo" + i + ".png");
  }
}

function setup() {
  createCanvas(640, 480);
}


function draw() {
  image(imagenesFondo[numFondo], 0, 0);
  if (numFondo == 0) {
    fill(0);
    textSize(48);
    textFont(fuente);
    textAlign (CENTER);
    text("Los Músicos de Bremen", 60, 150, 500, 200);
    image(cartel1, 260, 340, 120, 120);
  } else {
    textSize(18);
    textAlign (LEFT);
    text(textos[lineaTexto], 60, 200, 500, 200);
    if (numFondo == 4 || numFondo == 5 || numFondo == 11) {
      image(cartel2, 260, 340, 120, 120);
    } else {
      image(cartel1, 260, 340, 120, 120);
    }
  }
}


function mouseClicked() {
  if (mouseX >= 270 && mouseX <= 370 && mouseY >= 345 && mouseY <= 390) {
    numFondo++;
    lineaTexto = numFondo-1;
    if (numFondo == 9 || numFondo == 13 || numFondo == 16) {
      numFondo = 0;
      lineaTexto = numFondo-1;
    }
    if (numFondo == 13) {
      numFondo = 15;
      lineaTexto = numFondo-1;
    }
  } else if (mouseX >= 265 && mouseX <= 350 && mouseY >= 400 && mouseY <= 425) {
    if (numFondo == 4) {
      numFondo = 9;
      lineaTexto = numFondo-1;
    } else if (numFondo == 11) {
      numFondo = 13;
      lineaTexto = numFondo-1;
    } else if (numFondo == 5) {
      numFondo = 14;
      lineaTexto = numFondo-1;
    }
  }
}
