// Dans routes/weatherRouter.js
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res, next) => {
    try {
        const { lat, lon } = req.query;
        if (!lat || !lon) {
            res.status(400).send('Paramètres lat et lon nécessaires');
            return;
        }

        const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;
        const response = await fetch(url, {
            headers: { 'User-Agent': 'Metcity/1.0' }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        next(error);
    }
});


module.exports = router;
