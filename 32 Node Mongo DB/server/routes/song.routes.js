const express = require('express');
const song_router = express.Router()
const songController = require('../controllers/song.controller')


//get Artist All Songs
song_router.get('/:id',songController.getArtistAllSongs)

//get All Songs
song_router.get('/', songController.getAllSongs)

//post Song
song_router.post('/', songController.post)

//delete Song
song_router.delete('/:id',songController.delete)

module.exports = song_router
