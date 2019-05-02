const controller = require('../controllers/renderBlender');
const {check} = require('express-validator/check');
const registerValidator = require('../validators/register.validator');
const express = require('express');
const router = new express.Router();
router.get('/login', controller.login.get);
router.get('/register', controller.register.get);
router.post('/register', [
    check('username').isEmail(),
    check('password').isLength({min: 5})
], registerValidator, controller.register.post);
module.exports = router;
