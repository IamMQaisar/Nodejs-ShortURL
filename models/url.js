// import the mongoose module
const mongoose = require("mongoose");

// Define the schema for the URL model
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

// Create a model from the schema
const URL = mongoose.model("URL", urlSchema);
// Export the model
module.exports = URL;
