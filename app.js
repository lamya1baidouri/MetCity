var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sequelize = require('./config/database');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var villesRouter = require('./routes/ville');
var HomePageRouter=require('./routes/homePage');
var weatherRouter = require('./routes/weather');
var app = express();

// Configuration du moteur de vue
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

// Middlewares de logging et parsing
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/villes', villesRouter);
app.use('/HomePage',HomePageRouter);
app.use('/weather-details', weatherRouter);



// Synchronisation avec la base de données
sequelize.sync().then(() => {
  console.log('Base de données synchronisée.');
}).catch((error) => {
  console.error('Échec de la synchronisation de la base de données:', error);
});

// Gestion des erreurs 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Gestionnaire d'erreurs
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
