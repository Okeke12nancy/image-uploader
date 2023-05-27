const cloudinary = require("../utils/cloudinary");
const imageModel = require("../models/imageModel");

const getImageUrl = async (req, res) => {
  try {
    const publicId = req.params.publicId;
    // const imageUrl = cloudinary.url(publicId);
    const image = await imageModel.findOne({ publicId });
    res.json({ image });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to retrieve image" });
  }
};

module.exports = { getImageUrl };
