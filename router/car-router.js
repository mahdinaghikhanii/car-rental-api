const express = require('express');
const router =  express.Router();
const carController = require('../controller/car-controller');




router.get('/all-cars' , carController.GetAllCats);


module.exports = router;