const multer = require("multer");

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    return cb(null, true);
  },
});
module.exports = { upload };
