const routes = require('express').Router();

// routes.use('/api-docs', require('./swagger.js'));
routes.use('/contacts', require('./contacts'));

module.exports = routes;
