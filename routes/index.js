'use strict'
var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//User sign up

router.post("/register", function(req, res) {
    var newUser = new User ({
        username: req.body.username, 
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        profilePicture: req.body.profilePicture, 
        email: req.body.email,
        gender: req.body.gender,
    });

    User.register(newUser, req.body.password, function(err, user) {
        if(err){
            console.log(err);
            return res.render("landing", {error: err.message});
        }

        passport.authenticate("local")(req, res, function() {
            req.flash("success", "Welcome " + user.username);
        })
    })
}) 

module.exports = router;