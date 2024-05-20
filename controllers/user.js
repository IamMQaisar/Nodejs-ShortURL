// imports the User model and uuid module
const User = require("../models/user");
const { setUser } = require("../service/auth");

// functions for handling user signup and signin
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
      const token = setUser(user);
      console.log(token);
      return res.json({ token });
    } else {
      return res.end("User not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// exports the functions
module.exports = { handleUserSignup, handleUserSignin };
