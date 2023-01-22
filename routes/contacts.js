const contacts = require('express').Router();
const controller = require('../controllers/contactController');

contacts.get('/', controller.getAllContacts);

contacts.get('/:id', controller.getOneContact);

contacts.post('/', controller.insertOneContact);

contacts.put('/:id', controller.updateContact);

contacts.delete('/:id', controller.deleteOneContact);

module.exports = contacts;
