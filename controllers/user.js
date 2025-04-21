const User = require("../models/user.js")


module.exports.getsignup = (req, res) => {
    res.render("./user/signup.ejs");
}

module.exports.postsignup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let newUser = new User({ email, username });
        let registeredUser = await User.register(newUser, password);
        
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.getlogin = (req, res) => {
    res.render("./user/login.ejs");
}

module.exports.postlogin = (req, res) => {
    let original = res.locals.actualUrl || "/listings";
    req.flash("success", "Welcome back to Wanderlust!");
    res.redirect(original);
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash("success", "Successfully logged out!");
        res.redirect("/listings");
    });
}