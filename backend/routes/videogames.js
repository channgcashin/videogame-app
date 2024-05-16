const express = require('express');
const router = express.Router();
const videogamesController = require('../controllers/videogames')

// GET, POST, PUT, DELETE routes
router.get('/', videogamesController.getAllGames);
router.post('/', videogamesController.postGame);
router.put('/', videogamesController.putGame);
router.delete('/:id', videogamesController.deleteGame);

module.exports = router;