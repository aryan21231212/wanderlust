const express = require('express')
const app = express()
const router = express.Router()
const Listing = require("../models/listing.js")
const wrapAsync = require("../util/wrapAsync.js")
const {logedIn} = require("../authenticate.js")
const listingController = require('../controllers/index.js')
const multer  = require('multer')
const {storage} = require('../cloudConfig.js')
const upload = multer({ storage })

// listing
router.get("/",wrapAsync(listingController.index))

//new 
router.get("/new",logedIn,listingController.newlisting)

router.post('/create',upload.single('image'),listingController.createlisting)



// show details
router.get("/:id", logedIn, wrapAsync(listingController.showdetails))




//edit
router.get("/:id/edit",logedIn,wrapAsync(listingController.edit))

//update
router.put("/:id/update",logedIn,upload.single('image'),wrapAsync(listingController.update))

//delete
router.delete("/:id",logedIn, wrapAsync(listingController.delete))


module.exports = router