class Escenario {
  constructor() {
    this.posXEscenario = posXEscenario;
    this.velEscenario = 4;
  }

  dibujar(posXEscenario) {
    rect(this.posXEscenario, 0, 640, 480);
    image(fondo, this.posXEscenario, 0, 640, 480);
    image(pueblo, this.posXEscenario, 0, 640, 480);
    image(camino, this.posXEscenario, 0, 640, 480);
    this.mover();
  }

  repeticionFondo() {
    image(fondo[i], 0, 0, 60, 480);
    image(fondo[i], 0, 0, 640, 480);
    image(fondo[i], 0, 0, 640, 480);
  }

  mover() {
    this.posXEscenario = this.posXEscenario - this.velEscenario;
  }
}
