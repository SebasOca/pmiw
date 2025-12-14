class Obstaculo {
  constructor(posXObstaculo, posYObstaculo) {
    this.posXObstaculo = posXObstaculo;
    this.posYObstaculo = posYObstaculo;
    this.velObstaculo = 4;
  }

  dibujar() {
    image(obstaculo2Img, this.posXObstaculo, this.posYObstaculo, 100, 90);
    this.mover();
  }

  mover() {
    this.posXObstaculo = this.posXObstaculo - this.velObstaculo;
  }
}
