class PantallaResultado {
  constructor() {
    this.posXCartelResultado = 200;
    this.posYCartelResultado = 180;
  }

  dibujar() {
      this.cartelPierde();
      this.cartelGana();
  }

  cartelGana() {
    background (69, 219, 115);
    tint (255,120);
    image(decoInicio, 0, 0, 640, 480);
    tint (255, 255);
    image(cartelVidas, this.posXCartelResultado, this.posYCartelResultado, 200, 100);
    textSize (24);
    textFont(fuente);
    textAlign (CENTER);
    fill(0, 255, 0);
    text("Escapaste de los maleantes", 220, 110);
  }

  cartelPierde() {
    background (183, 100, 100);
    tint (255,120);
    image(decoInicio, 0, 0, 640, 480);
    tint (255, 255);
    image(cartelVidas, this.posXCartelResultado, this.posYCartelResultado, 200, 100);
    textSize (24);
    textFont(fuente);
    textAlign (CENTER);
    fill(255, 0, 0);
    text("Fuiste capturado por los maleantes", 220, 110);
  }
}
