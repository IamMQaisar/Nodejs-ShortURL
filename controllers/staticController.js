//imports the URL model
const URL = require("../models/url");

// functions for handling static pages
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

// exports the functions
module.exports = { handleStaticHome, handleStaticSignup, handleStaticSignin };
