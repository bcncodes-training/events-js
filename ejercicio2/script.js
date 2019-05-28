
let cambiarColor = (nodo,tecla)=>{
    switch (tecla){
        case 'r':
            nodo.className = 'red';
            break;
        case 'w':
            nodo.className = 'white';
            break;
        case 'y':
            nodo.className = 'yellow';
            break;
    }
}



let determinarColor = (e) =>{
    let tecla = event.key || event.keyIdentifier;
    let nodo = document.getElementById('tests');
    cambiarColor(nodo,tecla);
}


(function inicializar(){
let element = document.getElementById('tests');
element.focus();
element.addEventListener('keypress', function(e) {
    let tecla = event.key || event.keyIdentifier;
 //   let nodo = document.getElementById('tests');
    cambiarColor(element,tecla);
}
);
})()

//inicializar()