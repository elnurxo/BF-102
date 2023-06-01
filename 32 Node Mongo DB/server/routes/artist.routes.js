const express = require('express');
const artist_router = express.Router()
const artistController = require('../controllers/artist.controller');
const artistPostValidation = require('../middlewares/artist.middleware')

//get All Artists
artist_router.get('/',artistController.getAll)

//get Artist by ID
artist_router.get('/:id',artistController.getByID)

//post Artist
artist_router.post('/',artistPostValidation,artistController.post)

//delete Artist
artist_router.delete('/:id',artistController.delete)

//edit Artist
artist_router.put('/:id',artistController.edit)


module.exports = artist_router

