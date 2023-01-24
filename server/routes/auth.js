const express = require('express');
const user = require('../controllers/auth');
const router = express.Router();



router.post('/login', user.Login);
router.post('/forgetPassword', user.ForgetPassword);


module.exports = router;