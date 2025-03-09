const express = require('express');
const Recipe = require('../models/recipe'); // Import Recipe model
const router = express.Router();

// GET all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find(); // Fetch all recipes from MongoDB
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id); // Fetch a single recipe by ID
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new recipe
router.post('/', async (req, res) => {
  const { name, ingredients, instructions } = req.body;

  const newRecipe = new Recipe({
    name,
    ingredients,
    instructions,
  });

  try {
    const savedRecipe = await newRecipe.save(); // Save the recipe to MongoDB
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a recipe by ID
router.delete('/:id', async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id); // Delete recipe by ID
    res.json({ message: 'Recipe deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (Update) a recipe by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated recipe
    );
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
