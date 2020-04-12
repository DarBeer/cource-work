const express = require('express');
const router = express.Router();
const multer  = require('multer');

const Call = require('../../models/calls');

// GET calls by date
router.route('/:startDate&:endDate').get((req, res) => {
    Call.find({ date: { $gte: req.params.startDate, $lte: req.params.endDate } }, { date: true }, (err, calls) => {
        if (err) {
            res.json(err);
        } else {
            res.json(calls);
        }}
    );
});

module.exports = router;