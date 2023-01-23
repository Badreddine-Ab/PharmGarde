const express = require('express');
const { getNearbyPharmacies, addPharmacy } = require('../controllers/pharmacies');
const router = express.Router();



router.get('/', getNearbyPharmacies);
router.post('/pharmacies', addPharmacy);


module.exports = router;
