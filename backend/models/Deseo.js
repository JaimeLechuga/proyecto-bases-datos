const db = require('../config/db');

class Deseo {
    static async getAll() {
        const [rows] = await db.query('SELECT p.* FROM lista_deseos ld JOIN productos p ON ld.producto_id = p.id');
        return rows;
    }

    static async add(producto_id) {
        const [result] = await db.query('INSERT INTO lista_deseos (producto_id) VALUES (?)', [producto_id]);
        return result.insertId;
    }

    static async remove(producto_id) {
        const [result] = await db.query('DELETE FROM lista_deseos WHERE producto_id = ?', [producto_id]);
        return result.affectedRows;
    }

    static async exists(producto_id) {
        const [rows] = await db.query('SELECT 1 FROM lista_deseos WHERE producto_id = ?', [producto_id]);
        return rows.length > 0;
    }
}

module.exports = Deseo;