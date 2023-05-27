const express = require("express");
const { getImageUrl } = require("../controllers/imageController");

const router = express.Router();

router.get("/:publicId", getImageUrl);

module.exports = router;
