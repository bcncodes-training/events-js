//let box = document.getElementById('tests');
/*box.addEventListener('keypress', changeColour);
box.focus();

function changeColour(e) {
    switch (e.key.toUpperCase()) {
        case 'R':
            box.className='';
            box.classList.add('red');
            break;
        case 'Y':
                box.className='';
            box.classList.add('yellow');
            break;
        case 'G':
                box.className='';
            box.classList.add('green');
            break;
        default:
                box.className='';
            break;
    }
    console.log(e.key);
}
*/
class changeColourGame{
    constructor(){
        this.box=document.getElementById('tests');
    }
    start(){
        this.box.addEventListener('keypress', this.changeColour.bind(this));
        this.box.focus();
    }
    changeColour(e) {
        switch (e.key.toUpperCase()) {
            case 'R':
                    this.box.className='';
                    this.box.classList.add('red');
                    console.log(this);
                break;
            case 'Y':
                    this.box.className='';
                    this.box.classList.add('yellow');
                break;
            case 'G':
                    this.box.className='';
                    this.box.classList.add('green');
                break;
            default:
                    this.box.className='';
                break;
        }
        console.log(e.key);
    }
}

let game=new changeColourGame();

game.start();