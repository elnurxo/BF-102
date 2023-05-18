const SongModel = require('../models/song.model');

const songController = {
  getArtistAllSongs: async (req, res) => {
    const id = req.params.id;
    const songs = await SongModel.find({ artistID: id });
    if (songs == undefined) {
      res.status(404).send("songs not found!");
    } else {
      res.status(200).send(songs);
    }
  },
  getAllSongs: async (req, res) => {
    const songs = await SongModel.find();
    if (songs == undefined) {
      res.status(404).send("songs not found!");
    } else {
      res.status(200).send(songs);
    }
  },
  post: async (req, res) => {
    const { title, duration, cover, releaseYear, artistID } = req.body;

    const song = new SongModel({
      title: title,
      duration: duration,
      cover: cover,
      releaseYear: releaseYear,
      artistID: artistID,
    });
    await song.save();
    res.status(201).send("song created successfully");
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const deletedSong = await SongModel.findByIdAndDelete(id);
    if (!deletedSong) {
      res.status(404).send("song not found!");
    } else {
      res
        .status(203)
        .send({ data: deletedSong, message: "song deleted successfully!" });
    }
  },
};

module.exports  = songController
