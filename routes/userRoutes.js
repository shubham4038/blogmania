const express = require('express');
const userController = require('../controller/userController');
const authController = require('../controller/authController');

const router = express.Router();

router.route('/').get(userController.getAlluser);
router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);


module.exports = router;