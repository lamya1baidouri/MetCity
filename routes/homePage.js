// routes/homepage.js
const express = require('express');
const router = express.Router();



// GET request pour la page d'accueil
router.get('/', function(req, res) {
    try {
        res.render('homePage');
    } catch (error) {

        res.status(500).send(error.message);
    }
});

module.exports = router;
