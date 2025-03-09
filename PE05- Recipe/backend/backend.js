const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const recipeRoutes = require('./routes/recipeRoutes'); // Import recipe routes

// Load environment variables from config.env file
dotenv.config({ path: './config.env' });

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming requests with JSON payloads

// MongoDB connection
mongoose.connect(process.env.ATLAS_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// Use recipe routes
app.use('/api/recipes', recipeRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
