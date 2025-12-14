class PantallaActiva {
  constructor() {
    this.estado = 0;
    this.pantallaInicio = new PantallaInicio();
    this.juego = new Juego();
    this.pantallaGanar = new PantallaGanar();
    this.pantallaPerder = new PantallaPerder();
    this.pantallaActual = new PantallaInicio();
  }

  dibujar() {
    if (this.estado === 0) {
      this.pantallaInicio.dibujar();
    } else if (this.estado === 1) {
      this.juego.dibujar();
    }
  }


  mousePresionado() {
    if (this.estado === 0) {
      this.estado = 1;
      this.juego.iniciar();
      soundtrack.play();
    } else if (this.estado === 1) {
      this.estado = 0;
    }

    if (dist(this.juego.escenario.posXMeta + 340, 0, this.juego.jugador.burro.posXBurro + 80, 0) > 20 && this.juego.jugador.vidas >= 1) {
      this.juego.reiniciar();
    }
    if (this.juego.jugador.vidas === 0) {
      this.juego.reiniciar();
    }
  }

  teclaPresionada() {
    if (this.estado === 1) {
      this.juego.teclaPresionada();
    }
  }
}
