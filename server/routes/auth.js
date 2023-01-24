const express = require('express');
const user = require('../controllers/auth');
const router = express.Router();



router.post('/login', user.Login);


module.exports = router;