const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Alex Courter');
});

module.exports = routes;