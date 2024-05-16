const express = require('express');
const path = require('path');
const axios = require('axios');

console.log('just got inside server.js')

const app = express();

const PORT = process.env.PORT || 3000;
const FLASK_API_URL = process.env.FLASK_API_URL || 'http://127.0.0.1:5000/';


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Route to fetch table data from the Flask API
app.get('/data', async (req, res, next) => {
    try {
      const response = await axios.get((FLASK_API_URL + 'data'), {
        timeout: 5000, // Set a timeout for the request
      });
      res.json(response.data);
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        // Handle timeout error
        return next(new Error('Request timed out'));
      }
      next(error);
    }
  });

