const express = require('express');
const { getCommentaire,addCommentair } = require('../controllers/commantair.Js');
const router = express.Router();


router.get('/get', getCommentaire);
router.post('/add', addCommentair);


module.exports = router;
