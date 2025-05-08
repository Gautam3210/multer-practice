const express = require("express");
const getController = require("../controller/getController");
const getRouter = express.Router();

getRouter.get("/upload", getController);

module.exports = getRouter;
