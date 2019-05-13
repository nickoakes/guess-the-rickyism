/* 
    Guess the Rickyism
    Game.js
*/

class Game {

//initialize

    constructor(missed, phrases) {
        this.missed = 0;
        this.phrases = phraseStrings;
        this.activePhrase = null;
    }

//hide overlay, select random phrase and render phrase to display on new game

    startGame() {
        document.querySelector('#overlay').style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

//select random phrase

    getRandomPhrase() {
        let phraseIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[phraseIndex];
    }

//enable user to select letters using their keyboard

    handleKeyboardInteraction(e) {
        let keyPressed = e.key;
        let keyboard = document.querySelectorAll('.key');
        for(let i = 0; i < keyboard.length; i++) {

//disable key in on-screen keyboard when pressed

            if(keyboard[i].innerHTML === keyPressed) {
                keyboard[i].setAttribute('disabled', true);
                
//correct letter chosen

                if(this.activePhrase.checkLetter(keyboard[i].innerHTML)) {
                    keyboard[i].classList.add('chosen');
                    
//animate header to reflect correct choice

                    document.querySelector('.header').classList.remove('animated', 'bounce', 'shake');
                    void document.querySelector('.header').offsetWidth;
                    document.querySelector('.header').classList.add('animated', 'bounce');
                    this.activePhrase.showMatchedLetter(keyboard[i].innerHTML);
                    this.checkForWin();
                } else {
                    keyboard[i].classList.add('wrong');
                    
//animate header to reflect incorrect choice

                    document.querySelector('.header').classList.remove('animated', 'shake', 'bounce');
                    void document.querySelector('.header').offsetWidth;
                    document.querySelector('.header').classList.add('animated', 'shake');
                    this.removeLife();
                }
            }
        }
    }

//handle mouse interaction with on-screen keyboard

    handleInteraction(e) {
        e.target.setAttribute('disabled', true);

        if(this.activePhrase.checkLetter(e.target.innerHTML)) {
        e.target.classList.add('chosen');
        document.querySelector('.header').classList.remove('animated', 'bounce', 'shake');
        void document.querySelector('.header').offsetWidth;
        document.querySelector('.header').classList.add('animated', 'bounce');
        this.activePhrase.showMatchedLetter(e.target.innerHTML);
        this.checkForWin();
        } else {
            e.target.classList.add('wrong');
            document.querySelector('.header').classList.remove('animated', 'shake', 'bounce');
            void document.querySelector('.header').offsetWidth;
            document.querySelector('.header').classList.add('animated', 'shake');
            this.removeLife();
        }
    }

//remove a life

    removeLife() {

//replace bottle icon with broken bottle icon

        document.querySelector('[src="images/bottle.png"]').setAttribute('src', 'images/broken-bottle.png');
        
//increment number of incorrect choices made

        this.missed++;

//trigger game over when five incorrect choices have been made

        if(this.missed === 5) {
            document.querySelector('#overlay h2').innerHTML = "I've met cats and dogs smarter than you";
            this.missed = 0;
            this.gameOver();
            resetBoard();

        }
    }

//check whether all letters in the phrase have been selected

    checkForWin() {
        if(!document.querySelectorAll('.hide').length) {
            
//create overlay message for win
            
            document.querySelector('#overlay h2').innerHTML = "Right on!";
            
//display the phrase the user was required to guess

            document.querySelector('#overlay h3').innerHTML = `(${this.activePhrase.phrase})`;
            
//reset number of incorrect choices made and trigger game over
            
            this.missed = 0;
            this.gameOver();
            resetBoard();
        }
    }

//display overlay on game over

    gameOver() {
        document.querySelector('#overlay').style.display = "";
    }
}