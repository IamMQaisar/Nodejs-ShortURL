// Router for pages.
const express = require("express");
const router = express.Router();
// Import controller
const {
  handleGenerateNewShortURL,
  handleRidrectURL,
  handleGetAnalytics,
} = require("../controllers/url");
// Routes
router.route("/").post(handleGenerateNewShortURL);
router.route("/:shortId").get(handleRidrectURL);
router.route("/analytics/:shortId").get(handleGetAnalytics);
// Export the router
module.exports = router;
