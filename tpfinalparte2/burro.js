class PersonajeBurro {
  constructor() {
    this.posXBurro = 200;
    this.posYBurro = 280;
  }

  dibujar() {
    image(burroImg, this.posXBurro, this.posYBurro, 100, 80);
  }

  teclaPresionada() {
    if (keyCode === UP_ARROW && this.posYBurro >= 250) {
      this.posYBurro = this.posYBurro - 20;
    } else if (keyCode === DOWN_ARROW && this.posYBurro <= 370) {
      this.posYBurro = this.posYBurro + 20;
    } else if (keyCode === LEFT_ARROW && this.posXBurro >= 110) {
      this.posXBurro = this.posXBurro - 20;
    } else if (keyCode === RIGHT_ARROW && this.posXBurro <= 540) {
      this.posXBurro = this.posXBurro + 20;
    }
  }
}
