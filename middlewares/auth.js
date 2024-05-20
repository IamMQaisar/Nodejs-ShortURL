// import session getUser from Service
const { getUser } = require("../service/auth");

// Create middlwares for authentication
async function restrictToLoggedinUserOnly(req, res, next) {
  const userUid = req.headers["authorization"];

  if (!userUid) {
    console.log("No userUid found, redirecting to signin");
    return res.redirect("/signin");
  }
  const token = userUid.split("Bearer ")[1];
  const user = getUser(token);
  if (!user) {
    console.log("No user found, redirecting to signin");
    return res.redirect("/signin");
  }
  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  console.log(req.headers);
  const userUid = req.headers["authorization"];
  if (!userUid) {
    return next();
  }
  const token = userUid.split("Bearer ")[1];
  const user = getUser(token);
  req.user = user;
  next();
}

// export the middlewares
module.exports = {
  restrictToLoggedinUserOnly,
  checkAuth,
};
