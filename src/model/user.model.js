const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  blog: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema, "users");
