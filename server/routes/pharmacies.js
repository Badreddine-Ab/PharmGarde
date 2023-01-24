const express = require('express');
const { getNearbyPharmacies, addPharmacy,getAllPharmacier } = require('../controllers/pharmacies');
const router = express.Router();



// router.get('/', getNearbyPharmacies);
router.post('/pharmacies', addPharmacy);
router.get('/getAllPharmacier', getAllPharmacier);


module.exports = router;
