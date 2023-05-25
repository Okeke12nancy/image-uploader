const cloudinary = require("../utils/cloudinary");

const ImageModel = require("../models/imageModel");

const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.buffer);
    const imageUrl = result.secure_url;
    const publicId = result.public_id;

    // Save the image details to the database
    const image = new ImageModel({ imageUrl, publicId });
    await image.save();
    res.json({ imageUrl });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to upload image" });
  }
};

module.exports = { uploadImage };
