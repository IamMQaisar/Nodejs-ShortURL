// Router for pages.
const express = require("express");
const router = express.Router();

// Import controller
const { handleUserSignup, handleUserSignin } = require("../controllers/user");

// Routes
router.route("/signup").post(handleUserSignup);
router.route("/signin").post(handleUserSignin);

// Export the router
module.exports = router;
