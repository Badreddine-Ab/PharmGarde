const express = require('express');
const {add }= require('../controllers/pharmaController')
const router = express.Router();
router.post('/add',add)

module.exports={
    routes: router
}
