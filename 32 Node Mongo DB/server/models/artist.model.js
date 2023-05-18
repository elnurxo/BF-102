const mongoose = require('mongoose');

//Artist Model
const ArtistModel = mongoose.model("Artists", new mongoose.Schema({
    name: String,
    age: Number,
    imageURL: String,
}));

module.exports = ArtistModel
