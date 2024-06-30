const express = require('express');
const path = require('path');
const config = require('./config');
const rateLimitMiddleware = require('./middleware/rateLimitMiddleware');
const cacheMiddleware = require('./middleware/cacheMiddleware');
const { fetchFromApi } = require('./controllers/proxyController');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes first
app.use(express.json());
app.use(rateLimitMiddleware);
app.use(cacheMiddleware);

// Set CORS headers for specific route
app.use('/api/articles', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Replace with your frontend's origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/api/articles', fetchFromApi);

// Start server
const port = config.port;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
