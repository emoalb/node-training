const controller = require('../controllers/renderBlender');
const registerValidator = require('../validators/register.validator');
const express = require('express');
const router = new express.Router();
router.get('/login', controller.login.get);
router.get('/register', controller.register.get);
router.post('/register', registerValidator.optionsArray , registerValidator.validatorFunction, controller.register.post);
module.exports = router;
