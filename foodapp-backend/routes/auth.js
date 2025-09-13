const express = require('express');
const signupController = require('../controllers/signupController');
const loginController = require('../controllers/loginController');
const refreshController = require('../controllers/refreshController.js');
const logoutController = require("../controllers/logoutController");

const router = express.Router();

// Signup route
router.post('/signup', signupController.signup);

// Login route
router.post('/login', loginController.login);

//refresh token
router.post('/refresh', refreshController.refreshToken);

// Logout route
router.post("/logout", logoutController.logout);

module.exports = router;