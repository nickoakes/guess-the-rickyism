/* 
    Guess the Rickyism
    app.js
*/

//initialize a new game

let newGame = new Game();

//enable 'Start Game' button to start a new game

document.querySelector('#btn__reset').addEventListener('click', () => {
    newGame.startGame();
});

//add click and keydown event listeners to keys in on-screen keyboard

for(let i = 0; i < document.querySelectorAll('.key').length; i++) {
    document.querySelectorAll('.key')[i].addEventListener('click', (e) => newGame.handleInteraction(e))
};

document.addEventListener('keydown', (e) => {
    newGame.handleKeyboardInteraction(e);
})

//reset board

function resetBoard() {
    //remove phrase from display
    while (document.querySelector('#phrase > ul').firstChild) {
        document.querySelector('#phrase > ul').removeChild(document.querySelector('#phrase > ul').firstChild);
    }
    //reset on-screen keyboard
    for(let i = 0; i < document.querySelectorAll('.key').length; i++) {
        let keys = document.querySelectorAll('.key');
        keys[i].disabled = false;

        if(keys[i].classList.contains('chosen')) {
            keys[i].classList.remove('chosen')
        } else if(keys[i].classList.contains('wrong')) {
            keys[i].classList.remove('wrong')
        }
    }
    //reset lives count
    let lives = document.querySelectorAll('#scoreboard ol li img');
    
    for(let i = 0; i < lives.length; i++) {
        lives[i].setAttribute('src', 'images/bottle.png');
    }
}