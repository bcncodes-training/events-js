class ColorGame {
  constructor() {}
  cambiarColor(nodo, tecla) {
    switch (tecla) {
      case "r":
        nodo.className = "red";
        break;
      case "w":
        nodo.className = "white";
        break;
      case "y":
        nodo.className = "yellow";
        break;
    }
  }

  play() {
    let element = document.getElementById("tests");
    element.focus();
    element.addEventListener("keypress", function(e) {
      let tecla = event.key || event.keyIdentifier;
      //   let nodo = document.getElementById('tests');
      this.cambiarColor(element, tecla);
    }.bind(this));
  }
}

addEventListener('load',()=>{
    let game = new ColorGame();
    game.play();
})
