// Dans routes/weatherRouter.js
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const { lat, lon } = req.query;
    try {
        if (!lat || !lon) {
            return res.status(400).send('Latitude and longitude parameters are required');
        }
        const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;
        const response = await fetch(url, {
            headers: { 'User-Agent': 'Metcity/1.0' }
        });
        const data = await response.json();
        res.render('weatherDetails', { weather: data, title: "Weather Details" }); // Rendering a view with weather data
    } catch (error) {
        console.error('Error fetching weather:', error);
        res.status(500).send('Error fetching weather data');
    }
});
router.get('/alerts', async (req, res, next) => {
    try {
        const alertsUrl = 'https://api.met.no/weatherapi/metalerts/1.1/.json';
        const response = await fetch(alertsUrl, {
            headers: { 'User-Agent': 'Metcity/1.0' }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        res.render('alertListView', { alerts: data, title: "Weather Alerts" }); // Ensure the object name matches the one used in Twig
    } catch (error) {
        console.error('Error fetching weather alerts:', error);
        res.status(500).json({ error: 'Error fetching weather alerts data' });
    }
});


module.exports = router;
