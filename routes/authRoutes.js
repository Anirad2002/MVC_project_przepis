const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/register', authController.getRegisterForm);

router.post('/register', authController.registerUser);

router.get('/login', authController.getLoginForm);

router.post('/login', authController.loginUser);

router.get('/logout', authController.logoutUser);

module.exports = router;
