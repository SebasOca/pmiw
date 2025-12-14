class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.escenario = new Escenario();
    this.cantObstaculos = 28;
    this.Obstaculos = [];
    this.perseguidor = new Perseguidor();
    this.pantallaGanar = new PantallaGanar();
    this.pantallaPerder = new PantallaPerder();
  }

  iniciar() {
    for (let i=0; i<this.cantObstaculos; i++) {
      let posXObstaculo = random(600, 7500);
      let posYObstaculo = random(250, 380);
      this.Obstaculos[i] = new Obstaculo(posXObstaculo, posYObstaculo);
    }
  }

  reiniciar() {
    this.jugador = new Jugador();
    this.escenario = new Escenario();
    this.Obstaculos = [];
    this.Perseguidores = [];
    this.iniciar();
  }

  dibujar() {
    if (dist(this.escenario.posXMeta + 340, 0, this.jugador.burro.posXBurro + 80, 0) > 20 && this.jugador.vidas >= 1) {
      this.escenario.dibujar();
      this.dibujarObstaculos();
      this.perseguidor.dibujar();
      this.jugador.dibujar();
      this.choquePersonaje();
      this.dibujarHud();
    } else {
      this.meta();
      this.sinVida();
    }
  }

  dibujarObstaculos() {
    for (let i=0; i<this.cantObstaculos; i++) {
      this.Obstaculos[i].dibujar();
    }
  }

  choquePersonaje() {
    for (let i=0; i<this.cantObstaculos; i++) {
      if (dist(this.Obstaculos[i].posXObstaculo, this.Obstaculos[i].posYObstaculo + 80, this.jugador.burro.posXBurro + 80, this.jugador.burro.posYBurro + 80) < 20) {
        this.jugador.quitarVida();
        this.iniciar();
      }
    }
  }

  meta() {
    if (dist(this.escenario.posXMeta + 340, 0, this.jugador.burro.posXBurro + 80, 0) < 20 && this.jugador.vidas >= 1) {
      this.escenario.velEscenario1 = 0;
      this.escenario.velEscenario2 = 0;
      this.pantallaGanar.dibujar();
    }
  }

  sinVida() {
    if (this.jugador.vidas === 0) {
      this.escenario.velEscenario1 = 0;
      this.escenario.velEscenario2 = 0;
      this.pantallaPerder.dibujar();
    }
  }

  dibujarHud() {
    image(cartelVidas, 30, 30, 100, 50);
    fill(255);
    textSize (14);
    textFont(fuente);
    textAlign (CENTER);
    text("Vidas: " + this.jugador.vidas, 80, 60);
  }

  teclaPresionada() {
    this.jugador.teclaPresionada();
  }
}
