const db = require("../util/database")

// Class for CRUD operations
module.exports = class VideoGames {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    // Method for get request from the db
    static fetchAll() {
        return db.execute('SELECT * FROM videogames');
    }

    // Method for post request to the db
    static post(name) {
        return db.execute('INSERT INTO videogames (name) VALUES (?)', [name]); 
    }

    // Method for put request to the db
    static put(id, name) {
        return db.execute('UPDATE videogames SET name = ? WHERE id = ?', [name, id]); 
    }

    // Method for delete request to the db
    static delete(id) {
        return db.execute('DELETE FROM videogames WHERE id = ?', [id]); 
    }
};