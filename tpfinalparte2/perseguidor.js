class Perseguidor {
  constructor() {
    this.posXPerseguidor = 10;
    this.posYPerseguidor = 280;
    this.velocidad = 10;
  }

  dibujar() {
    fill(255);
    rect(this.posXPerseguidor, this.posYPerseguidor, 40, 70);
  }

  teclaPresionada() {
   /*if(this.posYPerseguidor === 280){
      this.posYPerseguidor = this.posYPerseguidor - 20;
    } else if(this.posYPerseguidor === 300){
      this.posYPerseguidor = this.posYPerseguidor + 20;
    }*/
    
    
    if(keyCode === UP_ARROW && this.posYPerseguidor >= 200){
      this.posYPerseguidor = this.posYPerseguidor + 20;
    } else if(keyCode === DOWN_ARROW && this.posYPerseguidor <= 400){
      this.posYPerseguidor = this.posYPerseguidor - 20;
    }
  }
}
