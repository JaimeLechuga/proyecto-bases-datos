const Producto = require('../models/Producto');

exports.getAllProducts = async (req, res) => {
    try {
        const productos = await Producto.getAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const producto = await Producto.getById(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const { nombre, descripcion, precio, stock, categoria_id, imagen_url } = req.body;
        const newProductId = await Producto.create(nombre, descripcion, precio, stock, categoria_id, imagen_url);
        res.status(201).json({ id: newProductId, message: 'Producto creado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProductsByCategory = async (req, res) => {
    try {
        const productos = await Producto.getByCategory(req.params.categoria_id);
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};