const express = require("express")
const mongoose  = require("mongoose")
const insertData = require("./data.js")
const Listing = require("../models/listing.js")

const app = express();


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wonderslust")
}

main().then(()=>{
    console.log('connected to mongoose')
}).catch(err=>{
    console.log(err)
})

app.get("/",(req,res)=>{
    res.send("working")
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})

app.get("/listing",async (req,res)=>{
    await Listing.deleteMany({});
  insertData.data =   insertData.data.map((obj)=>({...obj,owner:'67f9fdd9825dd6e8e05b42e5'}))
    await Listing.insertMany(insertData.data);
    res.send("data saved")
})

