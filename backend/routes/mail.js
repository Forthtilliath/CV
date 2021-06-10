const express = require('express');
const router = express.Router();

const mailCtrl = require('../controllers/mail');

router.post('/send', mailCtrl.send);

module.exports = router;
