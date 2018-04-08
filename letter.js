var letter = require('./words.js');

var word = function (wrdBox) {
    //set a prop called word set to =
    this.word = wrdBox;
    //set prop to call lettter array
    this.letterArry = [];
    //set prop called found to false
    this.found = false;
    //make a prop called populate 
    //push letters to populate
    this.populate = function () {
        for (var i = 0; i < this.word.length; i++) {
            this.letterArry.push(new letter.Letter(this.word[i].toUpprCase()));
        }
    };
};
//returns T orF 
this.guessedWrd = function () {
    var retrnCnter = 0;
    //set found prop to Tor F
    for (var i = 0; i < this.letterArry.length; i++) {
        if (this.letterArry[i].appear !== true) {
            //cheacks falseness
            return false;
        } else if (this.letterArry[i].appear === true) {
            //counts turths
            retrnCnter++;
        }
    }
    if (retrnCnter == this.letterArry.length) {
        //only retun t if all letters are right
        return true;
    } else {
        //if user fails
        return false;
    }
};
this.chkLttr = function (guessedLttr) {
    console.log('check letter =' + guessedLttr);
    var berOfLtter = 0;
    //loop over the lttrarry
    for (var i = 0; i < this.letterArry.legnth; i++) {
        if (this.letterArry[i].character.toUpprCase() === guessedLttr) {
            this.letterArry[i].appear = true;
            berOfLtter++;
        }
    }
    return berOfLtter;
};
this.wrdRender = function () {
    //make var to epmty 
    var string = '';
    //loopover this
    for (var i = 0; i < this.letterArry.length; i++) {
        string += this.letterArry[i].charDisplay();
    }
    return string;
};

exports.word = word;