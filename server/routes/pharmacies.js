const express = require('express');

const {verifyToken}=require('../middleware/Authentification')
const { getNearbyPharmacies, addPharmacy , DeletePharmacy , UpdatePharmacy } = require('../controllers/pharmacies');

const router = express.Router();



router.get('/', getNearbyPharmacies);

router.post('/pharmacies',verifyToken(), addPharmacy);
router.post('/pharmacies/update/:id', UpdatePharmacy);
router.post('/pharmacies/delete/:id', DeletePharmacy);



module.exports = router;
