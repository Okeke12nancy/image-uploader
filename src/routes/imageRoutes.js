const express = require("express");
const { getImageUrl } = require("../controllers/imageController");

const router = express.Router();

router.get("/image/:publicId", getImageUrl);

module.exports = router;
