class Escenario {
  constructor() {
    this.posXEscenario = posXEscenario;
    this.velocidad = 4;
  }

  dibujar(posXEscenario) {
    rect(this.posXEscenario, 0, 640, 480);
    image(fondo, this.posXEscenario, 0, 640, 480);
    image(pueblo, this.posXEscenario, 0, 640, 480);
    image(camino, this.posXEscenario, 0, 640, 480);
    this.mover();
  }

  mover() {
    this.posXEscenario = this.posXEscenario - this.velocidad;
  }
}
