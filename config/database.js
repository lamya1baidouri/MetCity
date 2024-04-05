// config/database.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'C:\\Users\\aliba\\DBMeteo\\mydatabaseMeteo.db', // Remplacez ceci par le chemin vers votre fichier de base de données SQLite.
});

module.exports = sequelize;
