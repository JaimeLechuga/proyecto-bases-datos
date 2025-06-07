const db = require('../config/db');

class Producto {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM productos');
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query('SELECT * FROM productos WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(nombre, descripcion, precio, stock, categoria_id, imagen_url) {
        const [result] = await db.query(
            'INSERT INTO productos (nombre, descripcion, precio, stock, categoria_id, imagen_url) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre, descripcion, precio, stock, categoria_id, imagen_url]
        );
        return result.insertId;
    }

    static async getByCategory(categoria_id) {
        const [rows] = await db.query('SELECT * FROM productos WHERE categoria_id = ?', [categoria_id]);
        return rows;
    }
}

module.exports = Producto;