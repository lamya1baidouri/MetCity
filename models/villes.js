// models/ville.js
const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Assurez-vous que le chemin est correct.

const Villes = sequelize.define('ville', {
    nom: {
        type: Sequelize.STRING,
        allowNull: false
    },
    latitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    longitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

module.exports = Villes;

