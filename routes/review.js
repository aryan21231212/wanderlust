const express = require("express")
const router = express.Router({mergeParams:true})
const Review = require("../models/review.js")
const {logedIn} = require("../authenticate.js")
const wrapAsync = require("../util/wrapAsync.js")
const Listing = require("../models/listing.js")
const reviewController = require('../controllers/review.js')

// delete review from listing
router.delete("/:review_id",logedIn,reviewController.delete)

// review post
router.post("/",
    logedIn, 
    wrapAsync(reviewController.addreview))


module.exports = router