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
    image(letrero, posXCartelResultado, posYCartelResultado, 200, 100);
    textSize (24);
    textFont(fuente);
    textAlign (CENTER);
    fill(0, 255, 0);
    text("Escapaste de los maleantes", 220, 110);
  }

  cartelPierde() {
    image(letrero, posXCartelResultado, posYCartelResultado, 200, 100);
    textSize (24);
    textFont(fuente);
    textAlign (CENTER);
    fill(255, 0, 0);
    text("Fuiste capturado por los maleantes", 220, 110);
  }
}
