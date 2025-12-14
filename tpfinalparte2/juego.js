class Juego {
  constructor(cambio) {
    this.cambio = cambio;

    this.jugador = new Jugador();
    this.escenario = new Escenario();
    this.cantObstaculos = 28;
    this.Obstaculos = [];
    this.cantPerseguidores = 2;
    this.Perseguidores = [];
    this.pantallaResultado = new PantallaResultado();
  }

  iniciar() {
    for (let i=0; i<this.cantObstaculos; i++) {
      let posXObstaculo = random(600, 7500);
      let posYObstaculo = random(250, 380);
      this.Obstaculos[i] = new Obstaculo(posXObstaculo, posYObstaculo);
    }
    for (let u=0; u<this.cantPerseguidores; u++) {
      let posXPerseguidor = random(0, 20);
      let posYPerseguidor = random(250, 380);
      this.Perseguidores[u] = new Perseguidor(posXPerseguidor, posYPerseguidor);
    }
  }

  dibujar() {
    if (dist(this.escenario.posXMeta + 340, 0, this.jugador.burro.posXBurro + 80, 0) > 20 && this.jugador.vidas >= 1) {
      this.escenario.dibujar();
      this.dibujarObstaculos();
      this.dibujarPerseguidores();
      this.jugador.dibujar();
      this.choquePersonaje();
      this.dibujarHud();
    } else {
      this.choqueMetaFinal();
      this.sinVida();
    }
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

  choquePersonaje() {
    for (let i=0; i<this.cantObstaculos; i++) {
      if (dist(this.Obstaculos[i].posXObstaculo, this.Obstaculos[i].posYObstaculo + 80, this.jugador.burro.posXBurro + 80, this.jugador.burro.posYBurro + 80) < 20) {
        this.jugador.quitarVida();
        this.iniciar();
      }
    }
  }

  choqueMetaFinal() {
    if (dist(this.escenario.posXMeta + 340, 0, this.jugador.burro.posXBurro + 80, 0) < 20 && this.jugador.vidas >= 1) {
      this.escenario.velEscenario1 = 0;
      this.escenario.velEscenario2 = 0;
      this.pantallaResultado.cartelGana();
    }
  }

  sinVida() {
    if (this.jugador.vidas === 0) {
      this.escenario.velEscenario1 = 0;
      this.escenario.velEscenario2 = 0;
      this.pantallaResultado.cartelPierde();
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
    /*if (keyCode === ENTER) {
     this.cambio.cambiarPantalla(new PantallaInicio(this.cambio));
     } else {
     this.jugador.teclaPresionada();
     }*/
  }
  
  
}
