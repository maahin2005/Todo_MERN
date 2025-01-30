require("dotenv").config();
const jwt = require("jsonwebtoken");

const isUserAuthenticated = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  try {
    if (!token) return res.status(401).json({ message: "Must have login. .." });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.body.userId = decoded.userId;
    req.body.username = decoded.username;
    req.body.role = decoded.role;

    next();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = isUserAuthenticated;
