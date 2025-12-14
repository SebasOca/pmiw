class PantallaActiva {
  constructor() {
    this.estado = 0;
    this.pantallaInicio = new PantallaInicio();
    this.juego = new Juego();
    this.juego.iniciar();
    //this.pantallaResultado = new PantallaResultado();
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


/*dibujar(){
 if (pantallaActiva === 1) {
 this.pantallaInicio.dibujar();
 this.pantallaActiva = 2;
 } else if (pantallaActiva === 2) {
 this.juego.dibujar();
 this.pantallaActiva = 3;
 } else if (pantallaActiva === 3) {
 this.pantallaResultado.dibujar();
 if (this.Obstaculos[30].dibujar() && this.jugador.vidas === 0) {
 this.pantallaResultado.dibujar.cartelPierde();
 } else if (this.Obstaculos[30].dibujar() && this.jugador.vidas > 0) {
 this.pantallaResultado.dibujar.cartelGana();
 }
 }
 this.juego.dibujar();
 this.pantallaActiva = 1;
 
 if (keyCode = 'SPACE'){
 
 } else {
 this.pantallaInicio.dibujar();
 }
 this.teclaPresionada();
 this.pantallaActiva++;
 }*/




/*teclaPresionada(keyCode = 'SPACE') {
 if (pantallaActiva === 1) {
 this.juego.dibujar();
 }
 }*/
