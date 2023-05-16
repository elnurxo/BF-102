const express = require('express')
const router = express.Router();

const controller = require('../controllers/ProductController');

// getAll
router.get('/',controller.get);

module.exports = router;