const express = require("express");
const multer = require("multer");
const postController = require("../controller/postController");

const postRouter = express.Router();



// For uploading image in own device
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});
const upload = multer({ storage: storage });


postRouter.post("/upload", upload.single("userfile"), postController);

module.exports = postRouter;
