const passport = require('passport');
const controller = require('../controllers/renderBlender');
const registerValidator = require('../validators/register.validator');
const express = require('express');
const router = new express.Router();
router.get('/login', controller.login.get);
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '../',
    failureRedirect: 'login'
}));
router.get('/register', controller.register.get);
router.post('/register', registerValidator.validatorFunction, passport.authenticate('local-signup', {
    successRedirect: 'login',
    failureRedirect: 'register'
}));
module.exports = router;
