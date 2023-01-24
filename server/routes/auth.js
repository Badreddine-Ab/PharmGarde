const express = require('express');
const user = require('../controllers/auth');
const router = express.Router();



// router.get('/', getNearbyPharmacies);
router.post('/login', user.Login);


module.exports = router;