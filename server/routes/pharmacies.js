const express = require('express');
const {verifyToken}=require('../middleware/Authentification')
const { getNearbyPharmacies, addPharmacy , DeletePharmacy , UpdatePharmacy, getAllPharmacier ,getPharmacierByGard,getOnePharmacier                                          } = require('../controllers/pharmacies');
const router = express.Router();

// router.get('/', getNearbyPharmacies);
router.get('/getAllPharmacier',getAllPharmacier);
router.get('/get/:id',getOnePharmacier);
router.post('/add',verifyToken(),addPharmacy);
router.post('/update/:id',verifyToken(), UpdatePharmacy);
router.post('/delete/:id',verifyToken(), DeletePharmacy);
router.post('/', getPharmacierByGard);


module.exports = router;
