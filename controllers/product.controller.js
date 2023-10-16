const Product = require('../models/product.model');

// // Get all products
// exports.getAllProducts = async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// Get single product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Add new product
exports.createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update product
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete product
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Get specific products
exports.getAllProducts = async (req, res) => {
    try {
        let nameQuery = req.query.name;
        let products;

        if(nameQuery) {
            // Using a case-insensitive search
            products = await Product.find({ name: new RegExp(nameQuery, 'i') });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete all products
exports.deleteAllProducts = async (req, res) => {
    try {
        await Product.deleteMany({});
        res.status(200).json({ message: 'All products deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
