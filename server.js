const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to fetch table data from the Flask API
app.get('/data', async (req, res) => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/data');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

// Route to handle SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
