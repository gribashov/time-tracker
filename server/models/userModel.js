const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please enter your username"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  role: {
    type: Number,
    default: 0, // 0 - user, 1 - admin
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
  activationLink: {
    type: String,
  },
});

module.exports = model("User", userSchema);
