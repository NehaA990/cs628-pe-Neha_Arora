const mongoose = require('mongoose');

// Recipe schema
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String], // Array of strings for ingredients
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
});

// Create model based on schema
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
