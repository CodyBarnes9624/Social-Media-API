const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3001; 

// MongoDB connection string
const MONGODB_URI = 'mongodb://localhost:27017/social-network';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json()); 

// Route Imports
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');
const friendRoutes = require('./routes/friendRoutes');
const reactionRoutes = require('./routes/reactionRoutes'); 

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/friends', friendRoutes);
app.use('/api/reactions', reactionRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});