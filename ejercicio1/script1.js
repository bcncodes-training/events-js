let actual, idTemporizador;

let anyadirTarget=(id)=>{
    let nodo = document.getElementById(id);
    nodo.className='target';
    nodo.addEventListener('click',ganar);
};

let eliminarTarget=(id)=>{
    let nodo = document.getElementById(id);
    nodo.className='';
    nodo.removeEventListener('click',ganar);
};

let generarAleatorio=(min,max)=>{
    return Math.floor(Math.random()*(max-min))+min;
};

let ganar = ()=>{
    alert('HAS GANADO!!!!!!!!');
    clearTimeout(idTemporizador);
    eliminarTarget(actual);
};

function cambiarCirculo(){
    if(actual>0)
    eliminarTarget(actual);

    actual = generarAleatorio(1,9);
    anyadirTarget(actual);
    idTemporizador = setTimeout(cambiarCirculo,3000);    
}

addEventListener('load',cambiarCirculo);