const { Schema, model } = require("mongoose");
// user schema
const UserSchema = new Schema({
  username: { type: String, unique: true, require: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, unique: true, require: true },
});

module.exports = model("User", UserSchema);
