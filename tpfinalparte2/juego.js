class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.cantObstaculos = 20;
    this.Obstaculos = [];
    this.cantPerseguidores = 2;
    this.Perseguidores = [];
    //this.Escenario();
  }

  iniciar() {
    let posXEscenario = 0;
    for (let i=0; i<this.cantObstaculos; i++) {
      let posXObstaculo = random(600, 8000);
      let posYObstaculo = random(280, 400);
      this.Obstaculos[i] = new Obstaculo(posXObstaculo, posYObstaculo);
    }
    for (let u=0; u<this.cantPerseguidores; u++) {
      let posXPerseguidor = random(0, 20);
      let posYPerseguidor = random(200, 400);
      this.Perseguidores[u] = new Perseguidor(posXPerseguidor, posYPerseguidor);
    }
  }

  dibujar() {
   // this.dibujarEscenario();
    this.dibujarObstaculos();
    this.dibujarPerseguidores();
    this.jugador.dibujar();
    this.dibujarHud();
    this.choquePersonaje();
  }

  dibujarEscenario() {
    this.Escenario.dibujar();
  }

  dibujarObstaculos() {
    for (let i=0; i<this.cantObstaculos; i++) {
      this.Obstaculos[i].dibujar();
    }
  }

  dibujarPerseguidores() {
    for (let u=0; u<this.cantPerseguidores; u++) {
      this.Perseguidores[u].dibujar();
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
