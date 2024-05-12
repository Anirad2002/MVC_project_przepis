const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/profile', userController.getUserProfile);

router.post('/profile/edit', userController.editUserProfile);


module.exports = router;

