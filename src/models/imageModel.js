const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  publicId: { type: String, required: true },
});

const ImageModel = mongoose.model("Image", imageSchema);

module.exports = ImageModel;
