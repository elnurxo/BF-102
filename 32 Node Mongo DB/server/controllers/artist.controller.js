const ArtistModel = require('../models/artist.model');
const SongModel = require('../models/song.model');

const artistController = {
  getAll: async (req, res) => {
    const { name } = req.query;
    const artists = await ArtistModel.find();
    if (name === undefined) {
      res.status(200).send({
        data: artists,
        message: "data get success!",
      });
    } else {
      res.status(200).send({
        data: artists.filter((x) =>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        ),
        message: "data get success!",
      });
    }
  },
  getByID: async (req, res) => {
    const id = req.params.id;
    const artist = await ArtistModel.findById(id);
    console.log("artist found: ", artist);
    if (!artist) {
      res.status(204).send("artist not found!");
    } else {
      res.status(200).send({
        data: artist,
        message: "data get success!",
      });
    }
  },
  post: async (req, res) => {
    const { name, age, imageURL } = req.body;
    const newArtist = new ArtistModel({
      name: name,
      imageURL: imageURL,
      age: age,
    });
    await newArtist.save();
    res.status(201).send("created");
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const artist = await ArtistModel.findByIdAndDelete(id);
    await SongModel.deleteMany({ artistID: id });
    if (artist === undefined) {
      res.status(404).send("artist not found");
    } else {
      res.status(203).send({
        data: artist,
        message: "artist deleted successfully",
      });
    }
  },
  edit: async (req, res) => {
    const id = req.params.id;
    const { name, age, imageURL } = req.body;
    console.log("name: ", name);
    const existedArtist = await ArtistModel.findByIdAndUpdate(id, {
      name: name,
      age: age,
      imageURL: imageURL,
    });
    if (existedArtist == undefined) {
      res.status(404).send("artist not found!");
    } else {
      res.status(200).send(`${name} updated successfully!`);
    }
  },
};

module.exports =  artistController
