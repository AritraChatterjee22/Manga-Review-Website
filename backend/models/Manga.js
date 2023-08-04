const mongoose = require('mongoose');

const mangaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
  },
  author: String,
  description: String,
  coverImageURL: String,
  releaseDate: Date,
  genres: [String],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }],
});

const Manga = mongoose.model('Manga', mangaSchema);

module.exports = Manga;
