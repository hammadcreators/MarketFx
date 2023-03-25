require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const authMidddlware = (req, res, next) => {
  const token = req.header("authorization");

  // If header is not provided
  if (!token) {
    return res
      .status(401)
      .json({ message: "You are not authorized to perform this action 1" });
  }
  // If the header is provided
  try {
    const payload = jwt.verify(token, SECRET_KEY);
    // If the token is valid
    req.user = payload.user;
    next();
  } catch (ex) {
    // If the token provided was wrong
    return res
      .status(401)
      .json({ message: "You are not authorized to perform this action" });
  }
};

module.exports = authMidddlware;
