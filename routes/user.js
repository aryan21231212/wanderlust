const express = require('express')
const router = express.Router()
const {originalPath} = require("../authenticate.js")
const User = require("../models/user.js")
const passport = require("passport")
const local_strategies = require("passport-local")
const userController = require('../controllers/user.js')


// Signup - GET
router.get("/signup",userController.getsignup);

// Signup - POST
router.post("/signup",userController.postsignup);

// Login - GET
router.get("/login",userController.getlogin);

// Login - POST
router.post(
    "/login",
    originalPath,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    userController.postlogin
);

// Logout
router.get("/logout",userController.logout);


module.exports = router;