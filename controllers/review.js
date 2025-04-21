const Review = require("../models/review.js")
const Listing = require('../models/listing.js')

module.exports.delete = async (req,res)=>{
    let {id,review_id} = req.params;
    let currentReview = await Review.findById(review_id).populate("author")
    console.log(currentReview)
    if(currentReview.author.username === req.user.username){
    await Listing.findByIdAndUpdate(id,{$pull:{review:review_id}})
    await Review.findByIdAndDelete(review_id)
    req.flash("success","review deleted successfully!")
   return res.redirect(`/listings/${id}`)
    }

        req.flash('error','No Access!')
     return   res.redirect(`/listings/${id}`)

}

module.exports.addreview = async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    let review  = new Review(req.body)
    review.author = req.user._id;
    listing.review.push(review);
    await review.save();
    await listing.save();
    req.flash("success","review added successfully!")
    res.redirect(`/listings/${id}`)

}