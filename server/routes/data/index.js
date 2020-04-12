const express = require('express');
const router = express.Router();

router.use('/calls', require('./calls'));
router.use('/users', require('./users'));

module.exports = router;