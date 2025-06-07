const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Configuración específica de CORS para estas rutas
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

router.get('/', productosController.getAllProducts);
router.get('/:id', productosController.getProductById);
router.post('/', productosController.createProduct);
router.get('/categoria/:categoria_id', productosController.getProductsByCategory);

module.exports = router;