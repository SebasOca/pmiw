class Obstaculo {
  constructor(posXObstaculo, posYObstaculo) {
    this.posXObstaculo = posXObstaculo;
    this.posYObstaculo = posYObstaculo;
    this.velocidad = 4;
  }

  dibujar() {
    fill(0);
    rect(this.posXObstaculo, this.posYObstaculo, 40, 70);
    this.mover();
  }

  mover() {
    this.posXObstaculo = this.posXObstaculo - this.velocidad;
  }
}
