// routes/villes.js
const express = require('express');
const router = express.Router();
const Ville = require('../models/villes.js');

router.get('/', async function(req, res) {
    try {
        const villes = await Ville.findAll();
        res.render('listevilles', { villes: villes });
    } catch (error) {
        res.status(500).send(error.message);
    }
});



router.post('/', async (req, res) => {
    try {
        const { nom, latitude, longitude } = req.body;
        const nouvelleVille = await Ville.create({ nom, latitude, longitude });
        res.status(201).json(nouvelleVille);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
// models/villes.js