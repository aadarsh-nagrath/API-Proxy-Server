const axios = require('axios');
const config = require('../config');

async function fetchFromApi(req, res) {
    try {
        const url = `${config.targetBaseUrl}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status || 500).json({
            message: error.message,
        });
    }
}

module.exports = {
    fetchFromApi,
};
