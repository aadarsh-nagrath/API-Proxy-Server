module.exports = {
    port: process.env.PORT || 3000,
    targetBaseUrl: 'https://dev.to/api/articles?username=aadarsh-nagrath', // Replace with your API base URL
    rateLimitWindowMs: 5 * 60 * 1000, // 5 minutes
    rateLimitMaxRequests: 30, // Max 50 requests per windowMs
    cacheTTL: 5 * 60 * 1000, // Cache TTL: 5 minutes
};
