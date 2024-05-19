// Router for static pages.
const express = require("express");
const router = express.Router();
// Import controller
const {
  handleStaticHome,
  handleStaticSignup,
  handleStaticSignin,
} = require("../controllers/staticController");

// Routes
router.route("/").get(handleStaticHome);
router.route("/signup").get(handleStaticSignup);
router.route("/signin").get(handleStaticSignin);

// Export the router
module.exports = router;
