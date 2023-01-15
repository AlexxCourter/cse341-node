const { ObjectId } = require("mongodb");
const database = require('../connector');


const getAllContacts = async(req,res,next) =>{
    await database.connectDB();
    const result = await database.getDb().db('cs341').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    })

}

const getOneContact = async(req,res,next) =>{
    await database.connectDB();
    const userId = new ObjectId(req.params.id);
    const result = await database.getDb().db('cs341').collection('contacts').find({_id : userId});
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    })

}

module.exports = {getAllContacts, getOneContact};