const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const personModel = require("../module/db_config");
require("dotenv").config();

//cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const postController = async (req, res) => {
  //uploading image to cloudinary and creating url
  const uploadResult = await cloudinary.uploader
    .upload(req.file.path)
    .catch((error) => {
      res.send("error occured");
    });

  // deleting image from folder called uploads
  fs.unlink(req.file.path, (err) => {
    if (err) {
      res.send("error in deleting");
    } else {
      console.log("\nDeleted file");
    }
  });

  // storing file in the data base
  const data = new personModel({
    name: req.body.name,
    surname: req.body.surname,
    photoUrl: uploadResult.url, // image url is being stored that above created
    cloudinaryId:uploadResult.public_id
  });

  const currentResult = await data.save();
  res.send("file uploaded in db");
  console.log(currentResult);
};

module.exports = postController;
