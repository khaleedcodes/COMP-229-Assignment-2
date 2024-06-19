const Product = require('../models/product.model');

// Create and Save a new Product
exports.create = (req, res) => {
    const product = new Product(req.body);
    product.save()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ message: err.message }));
};

// Retrieve all Products
exports.findAll = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(500).json({ message: err.message }));
};

// Retrieve a single Product by ID
exports.findOne = (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            if (!product) res.status(404).json({ message: 'Product not found' });
            else res.json(product);
        })
        .catch(err => res.status(500).json({ message: err.message }));
};

// Update a Product by ID
exports.update = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(product => {
            if (!product) res.status(404).json({ message: 'Product not found' });
            else res.json(product);
        })
        .catch(err => res.status(500).json({ message: err.message }));
};

// Delete a Product by ID
exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then(product => {
            if (!product) res.status(404).json({ message: 'Product not found' });
            else res.json({ message: 'Product deleted successfully' });
        })
        .catch(err => res.status(500).json({ message: err.message }));
};
