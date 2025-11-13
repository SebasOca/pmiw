class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.cantObstaculos = 40;
    this.Obstaculos = [];
  }

  iniciar() {
    for (let i=0; i<this.cantObstaculos; i++) {
      let posXObstaculo = random(600, 8000);
      let posYObstaculo = random(200, 400);
      this.Obstaculos[i] = new Obstaculo(posXObstaculo, posYObstaculo);
    }
  }

  dibujar() {
    this.dibujarObstaculos();
    this.jugador.dibujar();
    this.dibujarHud();
    this.choquePersonaje();
  }

  dibujarObstaculos() {
    for (let i=0; i<this.cantObstaculos; i++) {
      this.Obstaculos[i].dibujar();
    }
  }

  dibujarHud() {
    fill(0);
    text("Vidas: " + this.jugador.vidas, 50, 50);
  }

  teclaPresionada() {
    this.jugador.teclaPresionada();
  }

  choquePersonaje() {
    for (let i=0; i<this.cantObstaculos; i++) {
      if (dist(this.Obstaculos[i].posXObstaculo, this.Obstaculos[i].posYObstaculo, this.jugador.burro.posXBurro + 40, this.jugador.burro.posYBurro) < 20) {
        this.jugador.quitarVida();
        this.iniciar();
      }
    }
  }
}
