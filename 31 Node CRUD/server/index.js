const express = require("express");
const app = express();
const crypto = require("crypto");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
//data
const ARTISTS = [
  {
    id: 1,
    name: "Tyler the Creator",
    imageURL:
      "https://i.scdn.co/image/ab676161000051748278b782cbb5a3963db88ada",
    age: 70,
  },
  {
    id: 2,
    name: "Kanye West",
    imageURL:
      "https://www.thenews.com.pk/assets/uploads/updates/2023-05-15/1070367_8385471_Untitled-1_updates.jpg",
    age: 45,
  },
];

// let isLoggedIN = false;


// app.post("/api/login",(req,res)=>{
//     isLoggedIN = true;
//     res.status(200).send("welcome")
// })

// app.use((req,res,next)=>{
//     if (isLoggedIN==false) {
//         res.status(401).send("you must login")
//     }
//     else{
//         next();
//     }
// })


app.get("/api", (req, res) => {
  res.send("Welcome to Our API!");
});

//CRUD - CREATE READ UPDATE DELETE
//STATUS CODES - 200,201,202, 404, 204

//get All Artists
app.get("/api/artists", (req, res) => {
  const { name } = req.query;
  if (name === undefined) {
    res.status(200).send({
      data: ARTISTS,
      message: "data get success!",
    });
  } else {
    res.status(200).send({
      data: ARTISTS.filter(
        (x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
      ),
      message: "data get success!",
    });
  }
});
//get Artists by ID
app.get("/api/artists/:id", (req, res) => {
  const id = req.params.id;
  const artist = ARTISTS.find((x) => x.id === parseInt(id));
  if (!artist) {
    console.log("test");
    res.status(204).send("artist not found!");
    // return;
  } else {
    res.status(200).send({
      data: artist,
      message: "data get success!",
    });
    // return;
  }
});
//delete artist by ID
app.delete("/api/artists/:id", (req, res) => {
  const id = req.params.id;
  const artist = ARTISTS.find((x) => x.id == id);
  if (artist === undefined) {
    res.status(404).send("artist not found");
  } else {
    const idx = ARTISTS.indexOf(artist);
    ARTISTS.splice(idx, 1);
    res.status(203).send({
      data: artist,
      message: "artist deleted successfully",
    });
  }
});
//post
app.post("/api/artists",(req, res) => {
  const { name, age, imageURL } = req.body;
  const newArtist = {
    id: crypto.randomUUID(),
    name: name,
    imageURL: imageURL,
    age: age,
  };
  ARTISTS.push(newArtist);
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

PORT  = process.env.PORT;
app.listen(PORT, () => {
    console.log(`NODE APP listening on port ${PORT}`);
});
