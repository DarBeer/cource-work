const express = require('express');
const router = express.Router();

router.use('/api', require('./api'));
router.use('/data', require('./data'));

module.exports = router;