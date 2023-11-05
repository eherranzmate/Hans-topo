let TopoSwiwchtTime = 1000;
let timer = null;
let score = 0;

const hole = [
    document.querySelector('.hole1'),
    document.querySelector('.hole2'),
    document.querySelector('.hole3'),
    document.querySelector('.hole4'),
    document.querySelector('.hole5'),
    document.querySelector('.hole6')
];

const span$$ = document.querySelector('.score');
const mole$$ = document.querySelectorAll('.mole');
for(mole of mole$$) {
    mole.addEventListener('click', whack);
}

function startGame () {
    endGame();
    timer = setInterval(changeTopo, TopoSwiwchtTime)
    setTimeout(endGame,15000)
    score = 0;
    span$$.textContent = score;
    
}

function endGame () {
    clearInterval(timer);
    hideTopo();
}

function getRandomHole () {
    return Math.floor(Math.random()*6)
}

function hideTopo(){
    for(let hole$$ of hole){
        hole$$.classList.remove('up')
    }
}

function changeTopo() {
    hideTopo();
   
    const randomHole = hole[getRandomHole()];
    randomHole.classList.add('up');
    
}


function whack () {
    if (this.parentNode.classList.contains('up')){
        this.parentNode.classList.remove('up');
        score++;
        span$$.textContent = score;
    } 
}


