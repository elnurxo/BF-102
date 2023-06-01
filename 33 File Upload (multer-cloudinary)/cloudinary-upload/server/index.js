const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { default: mongoose, mongo } = require('mongoose');

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

const CharactersModel = new mongoose.model('Characters',new mongoose.Schema({
    name: String,
    imageURL: String
}))

app.get('/characters',async(req,res)=>{
    const data = await CharactersModel.find();
    res.status(200).send(data);
})
app.post('/characters',async(req,res)=>{
    const newCharacter = new CharactersModel({
        name: req.body.name,
        imageURL: req.body.imageURL
    })
    await newCharacter.save();
    res.status(201).send('data posted successfully!');
})

app.listen(process.env.PORT,()=>{
    console.log(`App Listening on PORT: ${process.env.PORT}`);
})
mongoose.connect(process.env.DB_CONNECTION)
.then(()=>{
    console.log('Mongo DB Connected!');
})
