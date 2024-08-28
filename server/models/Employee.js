const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile_picture: { type: String, default: 'default.jpg' }, // Optional profile picture field
});

module.exports = mongoose.model("employees", EmployeeSchema);
