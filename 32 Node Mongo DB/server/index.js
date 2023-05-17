const express = require("express");
const app = express();
const crypto = require("crypto");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Artist Schema
const ArtistSchema = new mongoose.Schema({
  name: String,
  age: Number,
  imageURL: String
});
//Song Schema
const SongSchema = new mongoose.Schema({
  title: String,
  duration: Number,
  cover: String,
  releaseYear: Number,
  artistID: {type: mongoose.Schema.Types.ObjectId, ref: 'Artists'}
})

//Artist Model
const ArtistModel = mongoose.model('Artists',ArtistSchema);
//Song Model
const SongModel = mongoose.model('Songs',SongSchema);
//MONGO DATABASE CONNECTION
DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>",DB_PASSWORD))
.then(()=> console.log("Mongo DB Connected!"))



//CRUD - CREATE READ UPDATE DELETE
//STATUS CODES - 200,201,202, 404, 204
app.get("/api", (req, res) => {
  res.send("Welcome to Our API!");
});
//get All Artists
app.get("/api/artists", async(req, res) => {
  const { name } = req.query;
  const artists = await ArtistModel.find();
  if (name === undefined) {
    res.status(200).send({
      data: artists,
      message: "data get success!",
    });
  } else {
    res.status(200).send({
      data: artists.filter((x)=>x.name.toLowerCase().trim().includes(name.toLowerCase().trim())),
      message: "data get success!",
    });
  }
});
//get Artists by ID
app.get("/api/artists/:id", async(req, res) => {
  const id = req.params.id;
  const artist = await ArtistModel.findById(id);
  console.log('artist found: ',artist);
  if (!artist) {
    res.status(204).send("artist not found!");
  } else {
    res.status(200).send({
      data: artist,
      message: "data get success!",
    });
  }
});
//delete artist by ID
app.delete("/api/artists/:id", async(req, res) => {
  const id = req.params.id;
  const artist = await ArtistModel.findByIdAndDelete(id);
  if (artist === undefined) {
    res.status(404).send("artist not found");
  } else {
    res.status(203).send({
      data: artist,
      message: "artist deleted successfully",
    });
  }
});
//post
app.post("/api/artists",async(req, res) => {
  const { name, age, imageURL } = req.body;
  const newArtist = new ArtistModel({
    name: name,
    imageURL: imageURL,
    age: age,
  })
  await newArtist.save();
  res.status(201).send("created");
});
//put
app.put("/api/artists/:id", (req, res) => {
  const id = req.params.id;
  const { name, age, imageURL } = req.body;
  const existedArtist = ARTISTS.find((x) => x.id == id);
  if (existedArtist == undefined) {
    res.status(404).send("artist not found!");
  } else {
    if (name) {
      existedArtist.name = name;
    }
    if (age) {
      existedArtist.age = age;
    }
    if (imageURL) {
      existedArtist.imageURL = imageURL;
    }
    res.status(200).send(`artist: ${existedArtist.name}`);
  }
});

//SONGS------------------------------------
app.get("/api/songs/:id",async(req,res)=>{
  const id = req.params.id;
  const songs = await SongModel.find();
  if (songs==undefined) {
    res.status(404).send("songs not found!");
  }
  else{
    res.status(200).send(songs.filter((song)=>song.artistID==id));
  }
})
//get all songs
app.get("/api/songs/",async(req,res)=>{
  const songs = await SongModel.find();
  if (songs==undefined) {
    res.status(404).send("songs not found!");
  }
  else{
    res.status(200).send(songs);
  }
})
app.post("/api/songs",async(req,res)=>{
  const{title,duration,cover,releaseYear,artistID} = req.body;

  const song = new SongModel({
    title: title,
    duration: duration,
    cover: cover,
    releaseYear: releaseYear,
    artistID: artistID
  })
  await song.save();
  res.status(201).send("song created successfully");
})

PORT  = process.env.PORT;
app.listen(PORT, () => {
    console.log(`NODE APP listening on port ${PORT}`);
});
