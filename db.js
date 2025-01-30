const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const connectDatabase = async (req, res, next) => {
  try {
    await mongoose.connect(URI);
    console.log(`Connected to logN MongoDB Atlas`);
  } catch (error) {
    console.error("database connection failed", error.message);
    process.exit(0);
  }
};

module.exports = connectDatabase;
