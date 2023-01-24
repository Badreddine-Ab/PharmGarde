// const geolib = require('geolib');
const commante = require('../models/commantair.js');
const apiError = require("../utils/apiError")


const addCommentair = async (req, res, next) => {
  try {
      const { name, commantair } = req.body;
      if (!name || !commantair ) {
          return next(new apiError('Missing required fields',400))
      }

      const newCommantair = await commante.create({
          name,
          commantair,
         
      });

      res.status(201).send(newCommantair);
  } catch (error) {
      console.log(error)
      res.status(500).send({ error: 'Error adding new pharmacy' });
  }
};

const getCommentaire = async (req, res, next) => {
  try {
    const allCommante = await commante.find()
    res.status(200).send(allCommante)
} catch (error) {
    res.status(400)
    throw new Error(error)
}
};


module.exports = {
    addCommentair,
    getCommentaire

}
