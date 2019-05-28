
/*        let circle0 = 0;
        let temps = 3000;
        let timeOut;
 
   
    function removeCircle(circle){
        if (circle!==0){
        circle.classList.remove('target');
        circle.removeEventListener('click', encert);}
    }
    function selectCircle() {
        return document.getElementById(Math.floor(Math.random() * 9) + 1);
    }
    function fillCircle() {
        circle0 = selectCircle();
        circle0.addEventListener('click', encert);
        circle0.classList.add('target');
    }
    function play() {
        newChance();
     }
    function newChance(){
        removeCircle(circle0);
        fillCircle();
        timeOut = setTimeout(newChance, temps);
       
    }
    function encert() {
        //temps -= 100;
        alert('Encert!!!');
        clearTimeout(timeOut);
        console.log(temps);
    }
//play();
window.addEventListener('load',play());
*/

class circleGame {
    constructor() {
        this.temps0 = 2000;
        this.timeOut = '';
        this.circle = 0;
    }
    play() {
        this.newChance();
    }
    newChance() {
        this.removeCircle(this.circle);
        this.fillCircle();
        this.timeOut = setTimeout(this.newChance.bind(this), this.temps0);
    }
    removeCircle(circle) {
        if (circle !== 0) {
            circle.classList.remove('target');
            circle.removeEventListener('click', this.encert);
        }
    }
    fillCircle() {
        this.circle = this.selectCircle();
        this.circle.addEventListener('click', this.encert);
        this.circle.classList.add('target');
    }
    selectCircle() {
        return document.getElementById(Math.floor(Math.random() * 9) + 1);
    }
    encert() {
        //this.temps0 -= 100;
        alert('Encert!!!');
        clearTimeout(this.timeOut);
        console.log(this.temps0);
    }

}
window.addEventListener('load', () => {
    let game = new circleGame();
    game.play();
});
