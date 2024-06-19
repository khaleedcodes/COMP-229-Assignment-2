const express = require('express');
const router = express.Router();
const categories = require('../controllers/category.controller');

// Create a new Category
router.post('/', categories.create);

// Retrieve all Categories
router.get('/', categories.findAll);

// Retrieve a single Category with id
router.get('/:id', categories.findOne);

// Update a Category with id
router.put('/:id', categories.update);

// Delete a Category with id
router.delete('/:id', categories.delete);

module.exports = router;
