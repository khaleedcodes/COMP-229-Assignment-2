const Category = require('../models/category.model');

// Create and Save a new Category
exports.create = (req, res) => {
    const category = new Category(req.body);
    category.save()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ message: err.message }));
};

// Retrieve all Categories
exports.findAll = (req, res) => {
    Category.find()
        .then(categories => res.json(categories))
        .catch(err => res.status(500).json({ message: err.message }));
};

// Retrieve a single Category by ID
exports.findOne = (req, res) => {
    Category.findById(req.params.id)
        .then(category => {
            if (!category) res.status(404).json({ message: 'Category not found' });
            else res.json(category);
        })
        .catch(err => res.status(500).json({ message: err.message }));
};

// Update a Category by ID
exports.update = (req, res) => {
    Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(category => {
            if (!category) res.status(404).json({ message: 'Category not found' });
            else res.json(category);
        })
        .catch(err => res.status(500).json({ message: err.message }));
};

// Delete a Category by ID
exports.delete = (req, res) => {
    Category.findByIdAndRemove(req.params.id)
        .then(category => {
            if (!category) res.status(404).json({ message: 'Category not found' });
            else res.json({ message: 'Category deleted successfully' });
        })
        .catch(err => res.status(500).json({ message: err.message }));
};
