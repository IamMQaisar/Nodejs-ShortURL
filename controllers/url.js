// imports URL model and shortid module
const URL = require("../models/url");
const shortid = require("shortid");

// function for Generating new short URL
async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }
  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectURL: req.body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });
  return res.redirect("/");
}

// function for handling redirect URL
async function handleRidrectURL(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: { visitHistory: { timestamp: Date.now() } },
    }
  );
  if (!entry) {
    res.status(404).send("URL not found");
    return;
  }
  res.redirect(entry.redirectURL);
}
// function for handling Analytics
async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  if (!result) {
    res.status(404).send("URL not found");
    return;
  }
  res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

// exports the functions
module.exports = {
  handleGenerateNewShortURL,
  handleRidrectURL,
  handleGetAnalytics,
};
