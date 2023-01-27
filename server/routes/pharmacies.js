const express = require('express');
const { verifyToken } = require('../middleware/Authentification')
const { getNearbyPharmacies, addPharmacy, DeletePharmacy, UpdatePharmacy, getAllPharmacier } = require('../controllers/pharmacies');
const router = express.Router();

// router.get('/', getNearbyPharmacies);
router.get('/getAllPharmacier',verifyToken(),getAllPharmacier);
router.post('/add',verifyToken(),addPharmacy);
router.post('/update/:id',verifyToken(), UpdatePharmacy);
router.post('/delete/:id',verifyToken(), DeletePharmacy);




module.exports = router;
