const mongoose = require("mongoose");

const UsersScheme = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("users", UsersScheme);

module.exports = UserModel;
