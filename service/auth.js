// Import jwt and secret key
const jwt = require("jsonwebtoken");
const secret = process.env.myLittleSecretKey;

// Function to set and get user using jwt token
function setUser(user) {
  return jwt.sign({ _id: user._id, email: user.email }, secret);
}
function getUser(token) {
  if (!token) {
    return null;
  }
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return null;
  }
}

// Export the functions
module.exports = {
  setUser,
  getUser,
};
