if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
const express = require("express")
const Listing = require("./models/listing.js")
const mongoose  = require("mongoose")
const path = require("path")
const methodOverride = require("method-override")
const ejsMate  = require("ejs-mate")
const wrapAsync = require("./util/wrapAsync.js")
const ErrorClass  = require("./util/ExpressError.js")
const Review = require("./models/review.js")
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash")
const passport = require("passport")
const local_strategies = require("passport-local")
const User = require("./models/user.js")
const {logedIn} = require("./authenticate.js")
const {originalPath} = require("./authenticate.js")
const listings = require('./routes/index.js')
const review = require('./routes/review.js')
const user = require('./routes/user.js')

const app = express();

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(methodOverride("_method"))
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")))

app.use(express.urlencoded({extended:true}))

const store = MongoStore.create({
    mongoUrl:'mongodb+srv://aryannn:dA42YFyMldGtgwqr@cluster0.oo1nulm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    crypto:{
        secret:"supersecretkey",
    },
    touchAfter: 24 * 3600,
});

store.on("error",()=>{
    console.log("ERROR in MONGO SESSION STORE",err);
})

const sessionData = {
    store,
    secret:"supersecretkey",
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
}

app.use(session(sessionData))
app.use(flash());
app.use(passport.initialize())
app.use(passport.session())
passport.use(new local_strategies(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

async function main(){
    await mongoose.connect('mongodb+srv://aryannn:dA42YFyMldGtgwqr@cluster0.oo1nulm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
}

main().then(()=>{
    console.log('connected to mongoose')
}).catch(err=>{
    console.log(err)
})



const port = 3000;

app.listen(port,()=>{
    console.log("listening on port 3000")
})

app.use((req,res,next)=>{
    res.locals.message = req.flash("success")
    res.locals.error = req.flash("error")
    res.locals.userdetail = req.user;
    next();
})

app.use('/listings',listings)
app.use('/listings/:id/review',review)
app.use('/',user)

app.use((err,req,res,next)=>{
   let {statusCode = 500,message="something went wrong"} = err;
    // res.status(statusCode).send(message)
    res.status(statusCode).render("err.ejs",{message})
})


