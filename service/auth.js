// Map to store sessionID to user mapping
const sessionIDtoUserMap = new Map();

// Function to set and get user in the map
function setUser(id, user) {
  return sessionIDtoUserMap.set(id, user);
}

function getUser(id) {
  return sessionIDtoUserMap.get(id);
}

// Export the functions
module.exports = {
  setUser,
  getUser,
};
