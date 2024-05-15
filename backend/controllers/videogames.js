const VideoGames = require('../models/videogames');

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