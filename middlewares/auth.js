// import session getUser from Service
const { getUser } = require("../service/auth");

// Create middlwares for authentication
async function restrictToLoggedinUserOnly(req, res, next) {
  const userUid = req.cookies?.uid;
  if (!userUid) {
    console.log("No userUid found, redirecting to signin");
    return res.redirect("/signin");
  }
  const user = getUser(userUid);
  if (!user) {
    console.log("No user found, redirecting to signin");
    return res.redirect("/signin");
  }
  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  const userUid = req.cookies?.uid;
  const user = getUser(userUid);
  req.user = user;
  next();
}

// export the middlewares
module.exports = {
  restrictToLoggedinUserOnly,
  checkAuth,
};
