const cache = require('memory-cache');
const config = require('../config');

function cacheMiddleware(req, res, next) {
    const key = req.originalUrl || req.url;
    const cachedBody = cache.get(key);
    if (cachedBody) {
        res.send(cachedBody);
        return;
    }
    res.sendResponse = res.send;
    res.send = (body) => {
        cache.put(key, body, config.cacheTTL);
        res.sendResponse(body);
    };
    next();
}

module.exports = cacheMiddleware;
