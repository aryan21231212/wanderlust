const mongoose  = require("mongoose");
const schema = mongoose.Schema;
const Review = require("./review.js")
const User = require('./user.js')

const Schema = new schema({
    title:{
       type: String,
       required:true,
    },
    
    description:
    {type:String,
     required:true,
    },

    image:{
        URL:String,
        filename:String,
    },
    price: {
       type: Number,
       required:true
    },
    location: {
        type:String,
        required:true,
    },
    country: {
        type:String,
        required:true,
    },
    review:[
        {
            type: schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    owner:{
        type: schema.Types.ObjectId,
        ref:"User"
    },
    geometry:{
        type:{
            type:String,
            enum: ['Point'],
            required:true,
        },
        coordinates:{
            type: [Number],
            required:true,
        }

    }

})

Schema.post("findOneAndDelete",async (listing)=>{
    if(listing){
    await Review.deleteMany({_id:{$in: listing.review}}) 
    }
})


const Listing = mongoose.model("Listing",Schema);

module.exports = Listing;