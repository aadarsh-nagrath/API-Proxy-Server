const rateLimit = require('express-rate-limit');
const config = require('../config');

const limiter = rateLimit({
    windowMs: config.rateLimitWindowMs,
    max: config.rateLimitMaxRequests,
    message: 'Rate limit exceeded. Please try again later.',
});

module.exports = limiter;
