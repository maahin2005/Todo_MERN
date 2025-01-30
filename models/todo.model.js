const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  userId: { type: String, require: true },
  title: { type: String, require: true },
  description: { type: String, require: true },
});

const TodoModel = mongoose.model("TodoModel", todoSchema);

module.exports = TodoModel;
