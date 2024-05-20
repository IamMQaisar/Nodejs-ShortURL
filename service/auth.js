// Map to store sessionID to user mapping
// const
const jwt = require("jsonwebtoken");
const secret = process.env.myLittleSecretKey;

// Function to set and get user in the map
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
