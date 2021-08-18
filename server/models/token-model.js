const { Schema, model } = require("mongoose");

// token schema
const TokenSchema = new Schema({
  // user id
  user: { type: Schema.Types.ObjectId, ref: "user" },
  refreshToken: { type: String, required: true },
});

module.exports = model("Token", TokenSchema);
