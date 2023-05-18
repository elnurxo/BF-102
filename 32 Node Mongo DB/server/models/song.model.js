const mongoose = require('mongoose');

//Song Model
const SongModel = mongoose.model(
  "Songs",
  new mongoose.Schema({
    title: String,
    duration: Number,
    cover: String,
    releaseYear: Number,
    artistID: { type: mongoose.Schema.Types.ObjectId, ref: "Artists" },
  })
);

module.exports = SongModel
