const cloudinary = require("../utils/cloudinary");

const ImageModel = require("../models/imageModel");

const uploadImage = async (req, res) => {
  try {
    const imagePath = req.file?.path;
    console.log(imagePath);
    const result = await cloudinary.uploader.upload(imagePath);
    const imageUrl = result.secure_url;
    const publicId = result.public_id;

    // Save the image details to the database
    const image = new ImageModel({ imageUrl, publicId });
    await image.save();
    res.json({ image });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to upload image" });
  }
};

module.exports = { uploadImage };
