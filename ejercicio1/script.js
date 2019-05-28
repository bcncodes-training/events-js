class CircleGame {
    constructor(){
        this.idTemporizador='';
        this.actual=0;
    }

    anyadirTarget(){
        let nodo = document.getElementById(this.actual);
        nodo.className = 'target';
        nodo.addEventListener('click', this.ganar.bind(this));
    }
    eliminarTarget(){
        let nodo = document.getElementById(this.actual);
        nodo.className='';
        nodo.removeEventListener('click',this.ganar.bind(this));
    }
    ganar(){
        this.eliminarTarget();
        clearTimeout(this.idTemporizador);
        alert('HAS GANADO!!!!!!!!!');
    }
    generarAleatorio(){
        this.actual = Math.floor(Math.random()*9)+1;
    }
    play(){
        if(this.actual>0) 
            this.eliminarTarget();

        this.generarAleatorio();
        this.anyadirTarget();

        this.idTemporizador = setTimeout(this.play.bind(this),3000);

    }

}

addEventListener('load',()=>{
    let game = new CircleGame();
    game.play();
})