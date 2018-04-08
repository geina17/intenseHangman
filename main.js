var word = require('./words.js');
var prompt = require('prompt');

console.log('||||||||||||||||||||||||||||||');
console.log("You REady for Inke'd Hangman?");
console.log("Guess typical designs");
console.log("Sit still now");
console.log('|||||||||||||||||||||||||||||');

prompt.start();

game = {
    wrdBank: ['skull', 'roses', 'quotes', 'barbwire', 'hearts', 'enfinity symbol', 'butterfly', 'feather'],
    wrdWon: 0,
    guessesRemain: 15,
    currentWrd: null,

    startGame: function (wrd) {
        this.resetGuesses();
        this.currentWrd = new word(this.wrdBank[Math.floor(Math.random() * this.wrdBank.length)]);
        this.currentWrd.getLet();
        this.promptUser();
    },
    resetGuesses: function () {
        this.guessesRemain = 15;
    },
    promptUser: function () {
        var self = this;
        prompt.get(['guesslttr', function (err, result) {
            console.log('you Guessed:' + result.guessLttr);
            var guessed = self.currentWrd.chkLttr(result.guessLttr);
            if (guessed = 0) {
                console.log('||||||');
                console.log('wrong');
                console.log('||||||');
            } else {
                console.log('||||||');
                if (self.currentWrd.findWrd()) {
                    console.log('correct');
                    console.log('||||||');
                    return;
                }
            }
            console.log('||||||');
            console.log('Guesses reaming:' + self.guessesRemain);
            console.log('||||||');
            if ((self.guessesRemain > 0) && (self.currentWrd.found == false)) {
                self.promptUser();
            } else if (self.guessesRemain == 0) {
                console.log('||||||');
                console.log('GaMe OvEr.Correct Word', self.currentWrd.target);
                console.log('||||||');
            } else {
                console.log(self.currentWrd.wrdRndr());
            }
        }]);
    }
};