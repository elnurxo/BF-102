const Joi = require('joi');

const artistSchema = Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    age: Joi.number().integer().positive().min(18).required(),
    imageURL: Joi.string().required()
})

module.exports = artistSchema