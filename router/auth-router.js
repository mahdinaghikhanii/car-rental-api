const express = require('express');
const router = express.Router();
const authController = require('../controller/auth-controller');

router.post('/sign-up', authController.signUpUser);
router.post('/sign-in',authController.singInUser);
router.get('/getAllUsers', authController.getAllUsers);





module.exports  = router;