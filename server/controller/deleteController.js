// const { ObjectId } = require("mongodb");
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");
const personModel = require("../module/db_config");

const deleteController = async (req, res) => {
  
  cloudinary.uploader.destroy(req.params.cloudId, (err, res)=>{
    if(err){
      console.log("error occured while deleting file from cloudinary")
    }else{
      console.log(" file from cloudinary is deleted")
    }
  })

  const deleted = await personModel.deleteOne({
    _id: new mongoose.Types.ObjectId(req.params.id),
  });

};
module.exports = deleteController;
