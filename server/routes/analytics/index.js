const express = require('express');
const router = express.Router();

router.use('/calls', require('./calls'));
router.use('/reports', require('./reports'));

module.exports = router;