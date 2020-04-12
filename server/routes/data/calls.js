const express = require('express');
const router = express.Router();
const multer  = require('multer');

const Call = require('../../models/calls');

// GET all calls
router.route('/').get((req, res) => {
    Call.find((err, call) => {
        if (err) {
            res.json(err);
        } else {
            res.json(call);
        }}
    );
});

// GET call by id
router.route('/:id').get((req, res) => {
    Call.findById({_id: req.params.id}, (err, call) => {
        if (err) {
            res.json(err);
        } else {
            res.json(call);
        }}
    );
});

// ADD call data
router.route('/add').post((req, res) => {
    const newCall = new Call(req.body);
    newCall.save((err, call) => {
        if (err) {
            res.json({msg: 'Failed to add article data to gallery'});
        } else {
            res.json([{msg: 'Article data added to gallery'}, newCall]);
            //res.json(image);
        }}
    );
});

// EDIT call
router.route('/edit/:id').get((req, res) => {
    let id = req.params.id;
    Call.findById(id, (err, call) => {
        res.json(call)
    })
});

// UPDATE call
router.route('/update/:id').post((req, res) => {
    Call.findById(req.params.id, (err, call) => {
        if (!call)
            return next(new Error(err));
        else {
            call.phone = req.body.phone;
            call.firstname = req.body.firstname;
            call.secondname = req.body.secondname;
            call.date = req.body.date;

            call.save()
                .then(
                    call => res.json(call)
                )
                .catch(
                    err => res.status(400).send(err)
                )
        }
    })
});

// DELETE call
router.route('/delete/:id').get((req, res) => {
    Call.findByIdAndRemove({_id: req.params.id}, (err, call) => {
        if (err) {
            res.json(err);
        } else {
            res.json(call);
        }}
    );
});

module.exports = router;