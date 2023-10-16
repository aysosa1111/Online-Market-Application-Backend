const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// All products
router.get('/', productController.getAllProducts);

// Single product by ID
router.get('/:id', productController.getProductById);

// Add new product
router.post('/', productController.createProduct);

// Update product
router.put('/:id', productController.updateProduct);

// Delete all products (Ensure this is placed BEFORE the delete by ID route)
router.delete('/deleteAll', productController.deleteAllProducts);

// Delete a single product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
