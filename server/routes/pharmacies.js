const express = require('express');
const {verifyToken}=require('../middleware/Authentification')
const { getNearbyPharmacies, addPharmacy , DeletePharmacy , UpdatePharmacy, getAllPharmacier } = require('../controllers/pharmacies');
const router = express.Router();

// router.get('/', getNearbyPharmacies);
router.get('/getAllPharmacier', getAllPharmacier);
router.post('/pharmacies', addPharmacy);
router.post('/pharmacies/update/:id', UpdatePharmacy);
router.post('/pharmacies/delete/:id', DeletePharmacy);

module.exports = router;
