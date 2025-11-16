class Perseguidor {
  constructor() {
    this.posXPerseguidor = -2;
    this.posYPerseguidor = 280;
    this.velocidad = 10;
  }

  dibujar() {
    image(perseguidorImg, this.posXPerseguidor, this.posYPerseguidor, 80, 90);
  }

  teclaPresionada() {
    if(keyCode === UP_ARROW && this.posYPerseguidor >= 200){
      this.posYPerseguidor = this.posYPerseguidor + 20;
    } else if(keyCode === DOWN_ARROW && this.posYPerseguidor <= 400){
      this.posYPerseguidor = this.posYPerseguidor - 20;
    }
  }
}
