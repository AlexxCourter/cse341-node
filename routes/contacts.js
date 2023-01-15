const contacts = require('express').Router();
const controller = require('../controllers/contactController');

contacts.get('/', controller.getAllContacts);

contacts.get('/:id', controller.getOneContact);

module.exports = contacts;