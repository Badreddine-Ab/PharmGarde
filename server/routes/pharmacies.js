const express = require('express');
const {verifyToken}=require('../middleware/Authentification')
const { getNearbyPharmacies, addPharmacy , DeletePharmacy , UpdatePharmacy, getAllPharmacier } = require('../controllers/pharmacies');
const router = express.Router();

// router.get('/', getNearbyPharmacies);
router.get('/getAllPharmacier',getAllPharmacier);
router.post('/add',addPharmacy);
router.post('/update/:id', UpdatePharmacy);
router.post('/delete/:id', DeletePharmacy);




module.exports = router;
