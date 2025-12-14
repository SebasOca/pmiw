class Escenario {
  constructor() {
    this.posXEscenario1 = 0;
    this.posXEscenario2 = 0;
    this.posXMeta = 7700;
    this.velEscenario1 = 2;
    this.velEscenario2 = 4;
    this.cantRepeticiones = 18;
  }

  dibujar() {
    image(fondo, this.posXEscenario1, 0, 8000, 500);
    image(camino, this.posXEscenario2, 0, 8000, 480);
    image(pueblo, this.posXEscenario2, 0, 8000, 490);

    image(arbolMeta, this.posXMeta, -40, 420, 560);
    fill(0, 0, 0);
    rect(this.posXMeta, 0, 640, 480);
    this.mover();
  }

  mover() {
    this.posXEscenario1 = this.posXEscenario1 - this.velEscenario1;
    this.posXEscenario2 = this.posXEscenario2 - this.velEscenario2;
    this.posXMeta = this.posXMeta - this.velEscenario2;
  }
}
