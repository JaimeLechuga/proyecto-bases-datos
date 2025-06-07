const Deseo = require('../models/Deseo');
const Producto = require('../models/Producto');

exports.getWishlist = async (req, res) => {
    try {
        const wishlist = await Deseo.getAll();
        res.json(wishlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addToWishlist = async (req, res) => {
    try {
        const producto = await Producto.getById(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        const exists = await Deseo.exists(req.params.id);
        if (exists) {
            return res.status(400).json({ message: 'El producto ya está en la lista de deseos' });
        }

        await Deseo.add(req.params.id);
        res.status(201).json({ message: 'Producto agregado a la lista de deseos' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.removeFromWishlist = async (req, res) => {
    try {
        const result = await Deseo.remove(req.params.id);
        if (result === 0) {
            return res.status(404).json({ message: 'Producto no encontrado en la lista de deseos' });
        }
        res.json({ message: 'Producto eliminado de la lista de deseos' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};