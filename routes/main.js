const controller = require('../controllers/renderBlender');
const express = require('express');
const router = new express.Router();
router.get('', controller.index.get);
module.exports = router;
