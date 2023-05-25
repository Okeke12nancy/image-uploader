const cloudinary = require("../utils/cloudinary");

const getImageUrl = async (req, res) => {
  try {
    const publicId = req.params.publicId;
    const imageUrl = cloudinary.url(publicId);

    res.json({ imageUrl });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to retrieve image" });
  }
};

module.exports = { getImageUrl };
