class PantallaActiva {
  constructor() {
    this.estado = 0;
    this.pantallaInicio = new PantallaInicio();
    this.juego = new Juego();
    this.pantallaResultado = new PantallaResultado();
    this.pantallaActual = new PantallaInicio(this);
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
    } else if (this.estado === 1) {
      this.estado = 0;
    } 
  }

  teclaPresionada() {
    if (this.estado === 1) {
      this.juego.teclaPresionada();
    }
  }
}
