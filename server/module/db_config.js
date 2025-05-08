const mongoose = require("mongoose");


const personSchema = new mongoose.Schema({
  name: String,
  surname: String,
  photoUrl: String,
  cloudinaryId:String
});
const personModel = mongoose.model("person", personSchema, "person");


module.exports = personModel