const express = require("express");
const urlRoute = require("./routes/url");
const { connecToMongoDB } = require("./connect");
const app = express();
const PORT = 8001;

app.use(express.json());

connecToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.use("/", urlRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
