const express = require('express');
const {verifyToken}=require('../middleware/Authentification')
const { getCommentaire,addCommentair } = require('../controllers/commantair.Js');
const router = express.Router();


router.get('/get',verifyToken(), getCommentaire);
router.post('/add',verifyToken(), addCommentair);


module.exports = router;
