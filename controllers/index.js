const Listing = require("../models/listing.js")
const axios = require('axios')

module.exports.index = async (req,res)=>{
    const listing = await Listing.find()
    res.render("./listing/index.ejs",{listing})
}

module.exports.newlisting = (req,res)=>{
    res.render("./listing/new.ejs")
}


module.exports.createlisting =  async (req,res,next)=>{

    const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${req.body.location}&format=json` ,{
        headers: {
            "User-Agent": "MyGeocodingApp aryanpratapsingh674@gmail.com" 
          }
    }
    )
    console.log(response.data[0])



    let URL = req.file.path
    let filename = req.file.filename
    let listing = new Listing(req.body)
    listing.owner = req.user._id
    listing.image = {URL,filename}  
    
    listing.geometry.type = 'Point',
    listing.geometry.coordinates = [response.data[0].lon ,response.data[0].lat]
    
    await listing.save();
    req.flash("success","Listing added successfully!")
    res.redirect("/listings")
}


module.exports.showdetails = async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path:"review",populate:{path:'author'}}).populate('owner');
    if(!listing){
        req.flash("error","Listing you serched for does not exist!")
       return res.redirect("/listings")
    }

      return  res.render("./listing/show.ejs",{listing})

    
}

module.exports.edit = async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    if(!listing){
        req.flash("error","Listing you serched for does not exist!")
       return res.redirect("/listings")
    }
    let orginalImageUrl = listing.image.URL;
    orginalImageUrl= orginalImageUrl.replace('/upload','/upload/w_250')
       return res.render("./listing/edit.ejs",{listing,orginalImageUrl})


}

module.exports.update = async (req,res)=>{
        let {id} = req.params;
        let URL = req.file.path;
        let filename = req.file.filename;
        let listing = await Listing.findByIdAndUpdate(id,req.body)
        if(typeof req.file !== "undefined"){
            listing.image = {URL,filename}
        }
        listing.save()
        req.flash("success","listing updated successfully!")
        res.redirect("/listings")
}


module.exports.delete = async (req,res)=>{
    let {id} = req.params;
    const deletedItem = await Listing.findByIdAndDelete(id)
    req.flash("success","listing deleted successfully!")
    res.redirect("/listings")
}