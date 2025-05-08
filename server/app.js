const express = require("express");
const cors = require("cors");
const postRouter = require("./routes/uploadRoute");
const getRouter = require("./routes/fetchRoute");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());




app.use(postRouter);
app.use(getRouter);

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
