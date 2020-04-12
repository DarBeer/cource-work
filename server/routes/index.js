const express = require('express');
const router = express.Router();

router.use('/data', require('./data'));
router.use('/analytics', require('./analytics'));

module.exports = router;