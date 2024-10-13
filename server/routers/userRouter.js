// imports
const express = require('express');
const authController = require('./../controllers/authController');

// express router
const router = express.Router();

// auth routes
router.route('/signup').post(authController.signUp);
router.route('/login').post(authController.login);

// exports
module.exports = router;
