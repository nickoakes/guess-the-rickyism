/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(missed, phrases) {
        this.missed = 0;
        this.phrases = phraseStrings;
        this.activePhrase = null;
    }
    startGame() {
        document.querySelector('#overlay').style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        let phraseIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[phraseIndex];
    }

    handleKeyboardInteraction(e) {
        let keyPressed = e.key;
        let keyboard = document.querySelectorAll('.key');
        for(let i = 0; i < keyboard.length; i++) {
            if(keyboard[i].innerHTML === keyPressed) {
                keyboard[i].setAttribute('disabled', true);
                
                if(this.activePhrase.checkLetter(keyboard[i].innerHTML)) {
                    keyboard[i].classList.add('chosen');
                    document.querySelector('.header').classList.remove('animated', 'bounce', 'shake');
                    void document.querySelector('.header').offsetWidth;
                    document.querySelector('.header').classList.add('animated', 'bounce');
                    this.activePhrase.showMatchedLetter(keyboard[i].innerHTML);
                    this.checkForWin();
                } else {
                    keyboard[i].classList.add('wrong');
                    document.querySelector('.header').classList.remove('animated', 'shake', 'bounce');
                    void document.querySelector('.header').offsetWidth;
                    document.querySelector('.header').classList.add('animated', 'shake');
                    this.removeLife();
                }
            }
        }
    }

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

    removeLife() {
        document.querySelector('[src="images/bottle.png"]').setAttribute('src', 'images/broken-bottle.png');
        this.missed++;
        console.log(this.missed);
        if(this.missed === 5) {
            document.querySelector('#overlay h2').innerHTML = "I've met cats and dogs smarter than you";
            this.missed = 0;
            this.gameOver();
            resetBoard();

        }
    }

    checkForWin() {
        if(!document.querySelectorAll('.hide').length) {
            document.querySelector('#overlay h2').innerHTML = "Right on!";
            this.missed = 0;
            this.gameOver();
            resetBoard();
        }
    }

    gameOver() {
        document.querySelector('#overlay').style.display = "";
    }
}