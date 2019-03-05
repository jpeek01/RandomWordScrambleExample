var listOfWords = {
  words: [
    'Armadillo','Javelina','Pronghorn',
    'Alamo','Washington on the Brazos','San Jacinto',
    'Houston','Dallas','Austin',
    'Tumbleweed','Six shooter','Rodeo',
    'Brazos','Rio Grande','Sabine',
    'Piney Woods','Hill Country','Lakes and Prairies',
    'Big Bend','Guadalupe','Caprock Canyons',
    'Sam Houston','Stephen F Austin','Davy Crockett',
    'Lake O the Pines','Possum Kingdom Lake','Caddo Lake',
    'Cowboy','Roughneck','Vaquero'
  ],

  scrambleWord : (word) => {
    // split it up if it has multiple words
    var phrase = word.split(' ');

    // loop through the word(s) in the phrase
    for(let x = 0; x <= phrase.length - 1; x++) {
        // get the individual words from the phrase and create an array with the split method
        let scrambledWord = phrase[x].split('');

        //loop through the word 
        for(let i = scrambledWord.length - 1; i > 0; i--) {
            // get a random position in the word
            let j = Math.floor(Math.random() * (i + 1));
            // do a sort similar to bubble sort. i starts as the last position. move it aside to the temp
            let temp = scrambledWord[i];
            // replace that same position with a random letter elsewhere in the word
            scrambledWord[i] = scrambledWord[j];
            // now set the random postion to the value that was originally i
            scrambledWord[j] = temp;

            // replace the original word in the phrase with scrambledWord array. 
            // join converts it back to a string
            phrase[x] = scrambledWord.join('');
        }

    }
    //return the whole phrase. join converts it to a string. 
    // the ' ' adds a space between words since those were stripped in the original word.split(' ')
    return phrase.join(' ');
  }
};

module.exports = listOfWords;
