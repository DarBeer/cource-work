const express = require('express');
const router = express.Router();
const multer  = require('multer');

const Report = require('../../models/report');

// GET reports by date
router.route('/:startDate&:endDate').get((req, res) => {
    Report.find({ date: { $gte: req.params.startDate, $lte: req.params.endDate } }, { date: true }, (err, reports) => {
        if (err) {
            res.json(err);
        } else {
            res.json(reports);
        }}
    );
});

module.exports = router;