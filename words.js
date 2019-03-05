var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var wordsSchema = new Schema({
  words: {
    type: Object,
  }
});

var words = mongoose.model("words", wordsSchema);

module.exports = words;