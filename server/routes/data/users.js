const express = require('express');
const router = express.Router();
const multer  = require('multer');

const User = require('../../models/users');

// GET all users
router.route('/all').get((req, res) => {
    
        User.find((err, users) => {
            if (err) {
                res.json(err);
            } else {
                res.json(users);
            }}
        );
    
});

//GET one user by login and password
router.route('/login/:email&:password').get((req, res) => {
    User.findOne({email: req.params.email, password: req.params.password}, (err, user) => {
        if (err) {
            res.json(err);

        } else {
            res.json(user);
        }
    })
});

//ADD new user
router.route('/create').post((req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, call) => {
        if (err) {
            res.json({msg: 'Failed to create user to database'});
        } else {
            res.json({msg: 'User data added to database'});
        }
    });
});

module.exports = router;