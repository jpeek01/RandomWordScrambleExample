listOfWords = require('./listOfWords.js');

var i = listOfWords.words.length;
var j = Math.floor(Math.random() * (i + 1));

console.log(listOfWords.scrambleWord(listOfWords.words[j]));
