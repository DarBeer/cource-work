const express = require('express');
const router = express.Router();

router.use('/calls', require('./calls'));

module.exports = router;