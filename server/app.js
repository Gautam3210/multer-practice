const fs = require("fs");
const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
require("./db");

// schema and model to store data in mongodb
const personSchema = new mongoose.Schema({
  name: String,
  surname: String,
  photoUrl: String,
});
const personModel = mongoose.model("person", personSchema, "person");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET, // Click 'View API Keys' above to copy your API secret
});

// for uploading image in database-----------

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});
const upload = multer({ storage: storage });

let currentResult;
app.post("/upload", upload.single("userfile"), async (req, res) => {
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
  });

  currentResult = await data.save();
  res.send("file uploaded in db");
  console.log(currentResult);
});

app.get("/upload", async (req, res) => {
  const personData = await personModel.find({});
  res.json(personData);
});

app.listen(5000);

// For uploading image in own device

// const upload = multer({
//   storage:multer.diskStorage({
//     destination: function(req, file, cb){
//       cb(null, 'uploads')
//     },
//     filename: function(req, file, cb){
//       cb(null, file.fieldname + '-' + Date.now() + '.jpg');
//     }
//   })
// }).single('user-file')
