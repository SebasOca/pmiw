class Obstaculo {
  constructor(posXObstaculo, posYObstaculo) {
    this.posXObstaculo = posXObstaculo;
    this.posYObstaculo = posYObstaculo;
    this.velocidad = 4;
  }

  dibujar() {
    image(obstaculo2Img, this.posXObstaculo, this.posYObstaculo, 140, 100);
    this.mover();
  }

  mover() {
    this.posXObstaculo = this.posXObstaculo - this.velocidad;
  }
}
