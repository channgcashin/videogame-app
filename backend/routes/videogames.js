const express = require('express');
const router = express.Router();
const videogamesController = require('../controllers/videogames')

router.get('/', videogamesController.getAllGames);

module.exports = router;