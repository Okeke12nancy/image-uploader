const express = require("express");
const { uploadImage } = require("../controllers/uploadController");

const { upload } = require("../middlewares/uploadMiddlewares");

const router = express.Router();

router.post("upload", upload, uploadImage);

module.exports = router;
