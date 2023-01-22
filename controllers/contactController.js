const { ObjectId } = require('mongodb');
const database = require('../connector');
const getAllContacts = async (req, res) => {
  await database.connectDB();
  const result = await database.getDb().db('cs341').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getOneContact = async (req, res) => {
  await database.connectDB();
  const userId = new ObjectId(req.params.id);
  const result = await database.getDb().db('cs341').collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const insertOneContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  await database.connectDB();
  const result = await database.getDb().db('cs341').collection('contacts').insertOne(contact);
  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res.status(500).json(result.error || 'Error: Something went wrong while creating the contact.');
  }
};

const updateContact = async (req, res) => {
  await database.connectDB();
  const userId = new ObjectId(req.params.id);

  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const result = await database
    .getDb()
    .db('cs341')
    .collection('contacts')
    .replaceOne({ _id: userId }, contact);
  if (result.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(result.error || 'Error: Something went wrong while updating the contact.');
  }
};

const deleteOneContact = async (req, res) => {
  await database.connectDB();
  const userId = new ObjectId(req.params.id);
  const result = await database
    .getDb()
    .db('cs341')
    .collection('contacts')
    .deleteOne({ _id: userId });
  if (result.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(result.error || 'Error: Something went wrong while deleting the contact.');
  }
};

module.exports = {
  getAllContacts,
  getOneContact,
  insertOneContact,
  updateContact,
  deleteOneContact
};
