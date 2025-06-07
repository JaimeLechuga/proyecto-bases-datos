const express = require('express');
const router = express.Router();
const deseosController = require('../controllers/deseosController');

router.get('/', deseosController.getWishlist);
router.post('/:id', deseosController.addToWishlist);
router.delete('/:id', deseosController.removeFromWishlist);

module.exports = router;