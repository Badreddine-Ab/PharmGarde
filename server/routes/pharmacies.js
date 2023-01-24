const express = require('express');
const {verifyToken}=require('../middleware/Authentification')
const { getNearbyPharmacies, addPharmacy } = require('../controllers/pharmacies');
const router = express.Router();



router.get('/', getNearbyPharmacies);
router.post('/pharmacies',verifyToken(), addPharmacy);


module.exports = router;
