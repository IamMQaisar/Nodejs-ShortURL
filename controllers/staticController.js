//imports
const URL = require("../models/url");

// functions
async function handleStaticHome(req, res) {
  if (!req.user) {
    return res.redirect("/signin");
  }
  const allurls = await URL.find({ createdBy: req.user._id });
  return res.render("home", { urls: allurls });
}

async function handleStaticSignup(req, res) {
  return res.render("signup");
}

async function handleStaticSignin(req, res) {
  return res.render("signin");
}

// exports
module.exports = { handleStaticHome, handleStaticSignup, handleStaticSignin };
