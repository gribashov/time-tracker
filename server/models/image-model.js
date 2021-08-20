const { Schema, model } = require("mongoose");

const ImageSchema = new Schema({
  title: { type: String },
  data: { type: String },
});

module.exports = model("Image", ImageSchema);
