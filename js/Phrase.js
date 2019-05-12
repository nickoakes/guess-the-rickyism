class Phrase {
    constructor(phrase) {
    this.phrase = phrase.toLowerCase();
}
    addPhraseToDisplay() {
        let phraseLetters = this.phrase.split('');
        phraseLetters.forEach(letter => {
            let placeholder = document.createElement('li');
            if(letter === " ") {
                placeholder.className = "space";
            } else if(letter === "-"  || letter === "'" || letter === "," || letter === "?") {
                placeholder.className = "symbol";
                placeholder.innerHTML = `${letter}`;
            } else {
                placeholder.className = `hide letter ${letter}`;
                placeholder.innerHTML = `${letter}`;
            }
            document.getElementById('phrase').firstElementChild.appendChild(placeholder);
        });
        const spacesArray = document.querySelectorAll('.section > ul > li.space');
        if(spacesArray.length >= 3 && spacesArray.length < 7) {
            document.querySelectorAll('.section > ul > li.space')[2].after(document.createElement('br'));
        } else if(spacesArray.length >= 7) {
            document.querySelectorAll('.section > ul > li.space')[2].after(document.createElement('br'));
            document.querySelectorAll('.section > ul > li.space')[4].after(document.createElement('br'));
            document.querySelectorAll('.section > ul > li.space')[6].after(document.createElement('br'));
        }
    }

    checkLetter(letter) {
        if(this.phrase.includes(letter)) {
            //event.target.classList.add('chosen');
            return true;
        }
    }

    showMatchedLetter(letter) {
        let correctLetters = document.querySelectorAll(`.${letter}`);
            for(let i = 0; i < correctLetters.length; i++) {
            correctLetters[i].classList.replace('hide', 'show');
        }
    }
}

const phraseArray = [
    "A link is only as long as your longest strong chain",
    "Beauty is in the eye when you hold her",
    "Burn the hatchet at both ends",
    "Looks like a tropical earthquake blew through here",
    "Cubic Zarcarbian",
    "Worst case Ontario",
    "Get two birds stoned at once",
    "What comes around is all around",
    "Friends with the Benedicts",
    "Good things come to those at the gate",
    "Indianapolis Jones",
    "Water under the fridge",
    "Two turnips in heat",
    "Take it and leave it",
    "Swallow my prize",
    "Catch twenty-three situation",
    "Survival of the fitness",
    "Supply and command",
    "What Lucy doesn't know won't learn her",
    "What Julian doesn't grow won't burn him",
    "Where there's smoke there's wires",
    "Rocket appliances",
    "Peach 'n' cake",
    "One man's garbage is another man person's good ungarbage",
    "Let's make toast",
    "Keep your friends close, but your enemy's toaster",
    "Gorilla see, Gorilla do",
    "Getting like Hank at this",
    "Five-minute rule",
    "Do you wanna get married by me?",
    "Don't judge a cover of a book by its look",
    "Denial and error",
    "All for all and one for one"
];

const phraseStrings = [];

for(let i = 0; i < phraseArray.length; i++) {
    phraseStrings.push(window['phrase' + i] = new Phrase(phraseArray[i]));
}