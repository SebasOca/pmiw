class Jugador {
  constructor() {
    this.vidas = 3;
    this.burro = new PersonajeBurro();
  }

  dibujar() {
    this.burro.dibujar();
  }

  quitarVida() {
    this.vidas = this.vidas - 1;
  }

  teclaPresionada() {
    this.burro.teclaPresionada();
  }
}
