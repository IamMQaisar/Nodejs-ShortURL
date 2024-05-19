// imports for Application
const express = require("express");
const path = require("path");
const { connecToMongoDB } = require("./connect");

//imports for Authentication
const cookieParser = require("cookie-parser");
const {restrictToLoggedinUserOnly, checkAuth} = require("./middlewares/auth");

// Import routes
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");


// Create an express app
const app = express();
const PORT = 8001;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Connect to MongoDB
connecToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });


// Routes
app.use("/", checkAuth, staticRoute);
app.use("/user", userRoute);
app.use("/url", restrictToLoggedinUserOnly, urlRoute); // inline middleware

// Listner
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
