const db = require("../util/database")

module.exports = class VideoGames {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM videogames');
    }
};