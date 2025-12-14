class PantallaInicio {
  constructor(cambio) {
    this.cambio = cambio;
  }

  dibujar() {
    tint (255, 255);
    image(fondoInicio, 120, 100, 400, 260);
    tint (255,120);
    image(decoInicio, 0, 0, 640, 480);
    tint (255, 255);
    fill (121, 82, 33);
    stroke (121, 82, 33);
    textAlign (CENTER);
    textSize (36);
    textFont(fuente);
    text ("El escape del burro", 320, 80);

    noStroke();
    textSize (18);
    textFont(fuente);
    text ("Presioná Enter para jugar", 50, 370, 550, 450);
    textSize (14);
    text ("Movete y esquivá los obstáculos usando las flechas \ny escapar con tus amigos", 50, 400, 550, 450);
    textSize (12);
    text ("Sebastián Ocampo   PMIW 2025                    Basado en Los músicos de Bremen", 10, 460, 620, 500);
  }

  /*teclaPresionada() {
    if (keyCode === ENTER) {
      this.cambio.cambiarPantalla(new Juego(this.cambio));
    }
  }*/
}
