const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const itemRoutes = require('./routes/itemRoute');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/items', itemRoutes);

// Catch JSON syntax errors
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      return res.status(400).json({ error: 'Invalid JSON format in request body' });
    }
    next();
  });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection failed:', err));