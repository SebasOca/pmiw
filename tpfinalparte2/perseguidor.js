class Perseguidor {
  constructor() {
    this.posXPerseguidor = -30;
    this.posYPerseguidor = 280;
  }

  dibujar() {
    image(perseguidorImg, this.posXPerseguidor, this.posYPerseguidor, 80, 90);
  }
}
