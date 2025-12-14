class Juego {
  constructor(cambio) {
    this.cambio = cambio;
    
    this.jugador = new Jugador();
    //this.escenario = new Escenario();
    this.cantEscenarios = 18;
    this.Escenarios = [];
    this.cantObstaculos = 28;
    this.Obstaculos = [];
    this.cantPerseguidores = 2;
    this.Perseguidores = [];
  }

  iniciar() {
    for (let j=0; j<this.cantEscenarios; j++) {
      let posXEscenario = 0;
      this.Escenarios[j] = new Escenario(posXEscenario, 0);
    }


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
    //this.escenario.dibujar();
    this.dibujarEscenarios();
    this.dibujarObstaculos();
    this.dibujarPerseguidores();
    this.jugador.dibujar();
    this.choquePersonaje();
    this.dibujarHud();
  }

  dibujarEscenarios() {
    for (let j=0; j<this.cantEscenarios; j++) {
      this.Escenarios[j].dibujar();
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
  
  dibujarHud() {
    image(cartelVidas, 30, 30, 100, 50);
    fill(255);
    textSize (14);
    textFont(fuente);
    textAlign (CENTER);
    text("Vidas: " + this.jugador.vidas, 80, 60);
  }

  teclaPresionada() {
    if (keyCode === ENTER) {
      this.cambio.cambiarPantalla(new PantallaInicio(this.cambio));
    } else{
      this.jugador.teclaPresionada();  
    }
  }
}
