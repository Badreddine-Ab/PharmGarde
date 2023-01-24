// const geolib = require('geolib');
const commante = require('../models/commantair.js');
const apiError = require("../utils/apiError")


const addCommentair = async (req, res, next) => {
    // const { UserName, commant } = req.body;
    // if (!UserName || !commant ) {
    //     return next(new apiError('Missing required fields',400))
    // }
    console.log(req.body);
    let Commentaire = new commante({
        UserName: req.body.UserName,
        commant: req.body.commant
       
    })
    Commentaire.save()
    //exeption handlig errro
        .then(Commentaire => {
            return  res.status(200).json({
                message: 'User Creat '
            });
        })

        .catch(error => {
            return  res.status(400).json({
                message: error.message
            })
        })
};


const getCommentaire = async (req, res, next) => {
  try {
    const { userName, Comment } = req.query;
    if (!userName || !Comment) {
      return next(new apiError('Missing latitude or longitude', 400))
    }
    const Commentaire = await Commentaire.findAll();
    const nearbyPharmacies = Commentaire.filter((p) => {
      const distance = geolib.getDistance(
        { latitude, longitude },
        { latitude: pharmacy.latitude, longitude: pharmacy.longitude }
      );
      return distance <= 5000; // 5km
    });
    res.send(nearbyPharmacies);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching pharmacies' });
  }
};


module.exports = {
    addCommentair,
    getCommentaire

}
