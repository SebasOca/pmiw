class Perseguidor {
  constructor() {
    this.posXPerseguidor = -30;
    this.posYPerseguidor = 280;
    this.velocidad = 20;
  }

  dibujar() {
    image(perseguidorImg, this.posXPerseguidor, this.posYPerseguidor, 80, 90);
  }

  teclaPresionada() {
      this.posXPerseguidor = this.posXPerseguidor - 1;
  }
}
