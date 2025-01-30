require("dotenv").config();
const jwt = require("jsonwebtoken");
const TodoModel = require("../models/todo.model");

const isUserAuthorized = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Token missing" });

  const { id } = req.params;

  try {
    const todo = await TodoModel.findOne({ _id: id });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (todo.userId === decoded.userId) {
      return next();
    }

    res.status(403).json({ message: "You are not allowed to access this" });
  } catch (error) {
    res.status(500).json({ message: error.message, errr: "is from here" });
  }
};

module.exports = isUserAuthorized;
