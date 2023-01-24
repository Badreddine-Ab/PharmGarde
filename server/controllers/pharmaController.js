'use strict';

const firsbase = require('../config/database')
const Pharmacier = require('../models/pharmacier')
const Firestore = firsbase.firestore();


const add = async(req,res,next)=> {
    try{
        const data = req.body;
        await Firestore.collection('pharmacier').doc().set(data)
        res.send('Record saved successfuly')


    }catch(error){
          res.status(400).send(error)
    }
  
}
module.exports={
    add
}