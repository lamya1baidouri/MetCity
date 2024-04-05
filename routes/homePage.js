// routes/homepage.js
const express = require('express');
const router = express.Router();

// GET request pour la page d'accueil
router.get('/', function(req, res) {
    try {
        // Rendre le template de la page d'accueil (home.twig)
        res.render('HomePage');
    } catch (error) {
        // Gestion des erreurs
        res.status(500).send(error.message);
    }
});

module.exports = router;
