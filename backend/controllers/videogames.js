const VideoGames = require('../models/videogames');

// Controller for get request on all games in table
exports.getAllGames = async (req, res, next) => {
    try {
        const [allGames] = await VideoGames.fetchAll();
        res.status(200).json(allGames);
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err);
    }
};

// Controller for adding new game into db
exports.postGame = async (req, res, next) => {
    try {
        const postResponse = await VideoGames.post(req.body.name);
        res.status(201).json(postResponse);
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err);
    }
};

// Controller for updating videogames table
exports.putGame = async (req, res, next) => {
    try {
        const putResponse = await VideoGames.put(req.body.id, req.body.name);
        res.status(200).json(putResponse);
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err);
    }
};

// Controller for deleting videogame
exports.deleteGame = async (req, res, next) => {
    try {
        const deleteResponse = await VideoGames.delete(req.params.id);
        res.status(200).json(deleteResponse);
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err);
    }
};