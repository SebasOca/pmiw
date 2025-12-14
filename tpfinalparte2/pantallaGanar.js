class PantallaGanar {
  constructor() {
    this.posXCartelResultado = 120;
    this.posYCartelResultado = 90;
  }

  dibujar() {
    background (69, 219, 115);
    tint (255, 120);
    image(decoInicio, 0, 0, 640, 480);
    tint (255, 255);
    image(cartelVidas, this.posXCartelResultado, this.posYCartelResultado, 400, 200);
    textSize (30);
    textFont(fuente);
    textAlign (CENTER);
    fill(0, 255, 150);
    text("Escapaste de los maleantes", 170, 180, 300, 80);
    textSize (18);
    fill(0);
    text ("Clickeá para volver al inicio", 50, 370, 550, 450);
  }
}
