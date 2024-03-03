// app.js

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(authMiddleware); // Apply authentication middleware

// Routes
app.use('/users', userRoutes);

