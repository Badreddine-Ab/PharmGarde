const express = require('express');
const { getCommentaire,addCommentair } = require('../controllers/commantair.Js');
const router = express.Router();


router.get('/getCommentaire', getCommentaire);
router.post('/addCommentair', addCommentair);


module.exports = router;
