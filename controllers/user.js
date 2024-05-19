// imports
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");
const { setUser } = require("../service/auth");

// functions
async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    return res.redirect("/");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function handleUserSignin(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      const sessionId = uuidv4();
      setUser(sessionId, user);
      res.cookie("uid", sessionId);
      return res.redirect("/");
    } else {
      return res.end("User not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// exports
module.exports = { handleUserSignup, handleUserSignin };
