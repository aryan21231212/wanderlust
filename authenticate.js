module.exports.logedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.reqUrl = req.originalUrl;
        req.flash('error',"must be logged in!")
      return  res.redirect("/login")
    }
    next()
}




module.exports.originalPath = (req,res,next)=>{
    if(req.session.reqUrl){
        res.locals.actualUrl = req.session.reqUrl
    }
    next()
}

