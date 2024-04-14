// routes/villes.js
const { Op } = require("sequelize");

const express = require('express');
const router = express.Router();
const Ville = require('../models/villes.js');

router.get('/', async function(req, res) {
    try {
        const villes = await Ville.findAll();
        res.render('listevilles', { villes });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/add', async (req, res) => {
    try {
        res.render('ajoutville');
    } catch (error) {
        res.status(400).render('error', { error: error.message });
    }
});

router.get('/search', async (req, res) => {
    try {
        const searchQuery = req.query.search || '';
        const villes = await Ville.findAll({
            where: { nom: { [Op.like]: `${searchQuery}%` } }
        });
        res.json(villes);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/add', async (req, res) => {
    try {
        const { nom, latitude, longitude } = req.body;
        if (!nom || !latitude || !longitude) {
            return res.status(400).json({ error: 'Tous les champs sont requis.' });
        }

        const villeExistante = await Ville.findOne({ where: { nom } });

        if (villeExistante) {
            return res.status(400).json({ error: 'Une ville avec ce nom existe déjà.' });
        }

        const nouvelleVille = await Ville.create({ nom, latitude, longitude });
        res.status(201).json(nouvelleVille);

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

router.post('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Ville.destroy({ where: { id } });
        if (result > 0) {
            res.status(200).send({ message: 'Ville supprimée avec succès' });
        } else {
            res.status(404).send({ message: 'Ville non trouvée' });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
